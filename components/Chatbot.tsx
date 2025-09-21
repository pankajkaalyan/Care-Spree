import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

const Chatbot: React.FC<{ closeChat: () => void }> = ({ closeChat }) => {
  const [chat, setChat] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initChat = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const newChat = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: "You are a friendly and helpful virtual assistant for Care Spree, an NDIS disability support provider. Your goal is to answer questions about our services (like Personal Care, Domestic Help, Transportation, Meal Preparation, etc.) and help users find information on the website. Be supportive, empathetic, and keep your answers concise. If you cannot answer a question, politely suggest contacting Care Spree directly via the 'Contact Us' page or by calling them.",
          },
        });
        setChat(newChat);
        setMessages([{ role: 'model', text: 'Hello! How can I help you today? Feel free to ask me about Care Spree\'s services.' }]);
      } catch (e) {
        console.error('Failed to initialize chat:', e);
        setError('Could not connect to the virtual assistant. Please try again later.');
      }
    };
    initChat();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading || !chat) return;

    const userMessage: Message = { role: 'user', text: userInput };
    setMessages(prev => [...prev, userMessage]);
    setUserInput('');
    setIsLoading(true);
    setError(null);

    try {
      const responseStream = await chat.sendMessageStream({ message: userInput });
      
      let currentResponse = '';
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      for await (const chunk of responseStream) {
        currentResponse += chunk.text;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].text = currentResponse;
          return newMessages;
        });
      }
    } catch (e) {
      console.error('Error sending message:', e);
      setError('Sorry, something went wrong. Please try again.');
      setMessages(prev => [...prev, { role: 'model', text: 'I seem to be having some trouble. Please try asking again in a moment.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const MessageBubble: React.FC<{ message: Message }> = ({ message }) => {
    const isUser = message.role === 'user';
    return (
      <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
        <div
          className={`max-w-xs md:max-w-md lg:max-w-lg rounded-2xl px-4 py-2 my-1 ${
            isUser
              ? 'bg-purple-600 text-white rounded-br-none'
              : 'bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-bl-none'
          }`}
        >
          {message.text}
        </div>
      </div>
    );
  };

  return (
    <div className="fixed bottom-24 right-6 w-80 md:w-96 h-[60vh] max-h-[500px] bg-white dark:bg-gray-800 rounded-xl shadow-2xl flex flex-col z-[100] transform transition-all duration-300 ease-in-out origin-bottom-right">
      <header className="bg-purple-700 text-white p-4 rounded-t-xl flex justify-between items-center">
        <div>
            <h3 className="font-bold text-lg">Care Spree Assistant</h3>
            <p className="text-xs opacity-80">Online</p>
        </div>
        <button onClick={closeChat} className="text-white hover:bg-white/20 w-8 h-8 rounded-full" aria-label="Close chat">
          <i className="fa-solid fa-times"></i>
        </button>
      </header>
      
      <main className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
        {error && <div className="text-red-500 text-center text-sm p-2 bg-red-100 rounded-md">{error}</div>}
        <div className="flex flex-col space-y-2">
            {messages.map((msg, index) => (
                <MessageBubble key={index} message={msg} />
            ))}
            {isLoading && (
                <div className="flex justify-start">
                    <div className="bg-gray-200 dark:bg-gray-600 text-gray-800 rounded-2xl rounded-bl-none px-4 py-2 my-1 flex items-center space-x-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-0"></span>
                        <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-150"></span>
                        <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300"></span>
                    </div>
                </div>
            )}
            <div ref={messagesEndRef} />
        </div>
      </main>

      <footer className="p-3 border-t bg-white dark:bg-gray-800 dark:border-gray-700 rounded-b-xl">
        <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            disabled={isLoading}
            aria-label="Chat input"
          />
          <button type="submit" disabled={isLoading || !userInput.trim()} className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-purple-700 transition-colors" aria-label="Send message">
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </form>
      </footer>
    </div>
  );
};

export default Chatbot;