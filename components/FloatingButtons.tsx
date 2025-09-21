
import React, { useState, useEffect } from 'react';
import Chatbot from './Chatbot';

const FloatingButtons: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <>
            {isChatOpen && <Chatbot closeChat={() => setIsChatOpen(false)} />}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
                 <div className="flex items-center space-x-3">
                    {!isChatOpen &&
                        <span className="bg-white dark:bg-gray-700 p-2 rounded-lg shadow-lg text-sm text-gray-800 dark:text-gray-200">Chat with us</span>
                    }
                    <button 
                        onClick={() => setIsChatOpen(!isChatOpen)} 
                        className="w-14 h-14 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-900 transition-all transform hover:scale-110"
                        aria-label={isChatOpen ? "Close chat" : "Open chat"}
                    >
                        <i className={`fa-solid ${isChatOpen ? 'fa-times' : 'fa-comment-dots'} text-2xl`}></i>
                    </button>
                 </div>
                <a href="https://wa.me/61470219358" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all transform hover:scale-110" aria-label="Chat on WhatsApp">
                    <i className="fab fa-whatsapp text-3xl"></i>
                </a>
                {isVisible && (
                    <button onClick={scrollToTop} className="w-14 h-14 bg-blue-800 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-900 transition-all transform hover:scale-110" aria-label="Scroll to top">
                        <i className="fa-solid fa-arrow-up text-xl"></i>
                    </button>
                )}
            </div>
        </>
    );
};

export default FloatingButtons;