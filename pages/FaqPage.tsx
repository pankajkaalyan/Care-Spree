import React, { useState } from 'react';

const FaqHero = () => (
    <section className="relative bg-purple-800 text-white py-20 md:py-32 bg-cover bg-center" style={{ backgroundImage: "url('./images/faq-hero-bg.svg')" }}>
        <div className="absolute inset-0 bg-purple-900 opacity-60"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold">Faqs</h1>
        </div>
    </section>
);

interface AccordionItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => (
    <div className="border-b border-gray-200 dark:border-gray-700">
        <button
            onClick={onClick}
            className="w-full flex justify-between items-center text-left py-5 px-6 focus:outline-none"
            aria-expanded={isOpen}
        >
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{question}</h3>
            <span className="text-purple-600 text-2xl transform transition-transform duration-300">
                {isOpen ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>}
            </span>
        </button>
        <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
        >
            <p className="p-6 pt-0 text-gray-600 dark:text-gray-400">{answer}</p>
        </div>
    </div>
);


const FaqPage: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqData = [
        {
            question: "What is community care?",
            answer: "Community care refers to the services and support systems that enable individuals, particularly those who are elderly, disabled, or facing health challenges, to live independently in their own homes and within their community, rather than being placed in institutional settings."
        },
        {
            question: "Who can benefit from community care?",
            answer: "Community care benefits a wide range of individuals, including seniors wishing to age in place, people with disabilities seeking greater independence, and those recovering from illness or surgery who need temporary support at home."
        },
        {
            question: "How do I know if community care is right for me?",
            answer: "If you or a loved one wishes to remain at home but requires assistance with daily activities, personal care, or health management, community care could be the ideal solution. We recommend a consultation with our experts to assess your specific needs."
        },
        {
            question: "How do I access community care services?",
            answer: "Accessing our services is simple. Start by contacting us for a free consultation. We will work with you to understand your needs, determine your eligibility for funding like NDIS, and create a personalized care plan."
        },
        {
            question: "Can family members provide community care?",
            answer: "Yes, family members can be integral parts of a community care plan. We offer services that support family caregivers, including respite care and training, to ensure your loved one receives comprehensive and sustainable support."
        },
    ];

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <FaqHero />
            <section className="py-16 sm:py-24 bg-gray-50/70 dark:bg-gray-800">
                <div className="container mx-auto px-6">
                    <div className="bg-white dark:bg-gray-700 p-8 md:p-12 rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto animate-on-scroll">
                        <div className="flex-1">
                            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">OUR QUESTION AND ANSWER</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">Frequently Asked Question & Answer Here</h2>
                        </div>
                        <div className="flex-shrink-0">
                             <img src="images/faq.png" alt="Illustration of a person holding A and B cards" className="w-48 h-auto"/>
                        </div>
                    </div>
                    
                    <div className="mt-12 max-w-5xl mx-auto bg-white dark:bg-gray-800/50 rounded-xl shadow-lg overflow-hidden animate-on-scroll" style={{ transitionDelay: '100ms' }}>
                        {faqData.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onClick={() => handleToggle(index)}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default FaqPage;