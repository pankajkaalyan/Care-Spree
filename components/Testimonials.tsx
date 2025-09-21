import React, { useState, useEffect, useCallback } from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, role }) => (
  <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg h-full">
    <div className="flex items-center text-yellow-400">
        {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
    </div>
    <p className="mt-4 text-gray-600 dark:text-gray-300 italic">"{quote}"</p>
    <div className="mt-6">
        <p className="font-bold text-gray-900 dark:text-white">{name}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    { quote: "The staff goes above and beyond to create a warm and inclusive environment. I always feel welcome and cared for.", name: 'Priya S.', role: 'Consultant' },
    { quote: "A supportive and understanding team like this is hard to find. I'm grateful for their dedication and kindness.", name: 'Ethan W.', role: 'Consultant' },
    { quote: "Their personalized approach made all the difference in my journey. Highly recommend their professional services.", name: 'Olivia R.', role: 'Client' },
    { quote: "Care Spree has been a lifeline for our family. The support they provide for my son is exceptional, and their communication is always clear and compassionate.", name: 'David L.', role: 'Parent' },
    { quote: "Finding reliable transport was a huge challenge for me. Care Spree's transportation service has given me back my independence. The drivers are fantastic!", name: 'Sarah J.', role: 'Client' },
    { quote: "The team is incredibly patient and skilled. They've helped me develop life skills I never thought I'd master. I feel so much more confident now.", name: 'Ben C.', role: 'Client' },
    { quote: "From the initial consultation to the ongoing support, every interaction has been professional and genuinely caring. They truly put the client first.", name: 'Maria G.', role: 'Support Coordinator' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setTimeout(goToNext, 5000); // Auto-scroll every 5 seconds
    return () => clearTimeout(timer);
  }, [currentIndex, goToNext]);

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-16 sm:py-24">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-on-scroll">
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">OUR CLIENTS FEEDBACK</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">What Our Clients Say About <br/> Care Spree?</h2>
        </div>
        
        <div className="mt-12 max-w-2xl mx-auto relative animate-on-scroll" style={{ transitionDelay: '100ms' }}>
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="w-full flex-shrink-0 px-2 pb-2">
                             <TestimonialCard {...testimonial} />
                        </div>
                    ))}
                </div>
            </div>

            <button 
                onClick={goToPrevious}
                className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors z-10"
                aria-label="Previous testimonial"
            >
                <i className="fa-solid fa-chevron-left text-gray-700 dark:text-gray-300"></i>
            </button>

            <button 
                onClick={goToNext}
                className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors z-10"
                aria-label="Next testimonial"
            >
                <i className="fa-solid fa-chevron-right text-gray-700 dark:text-gray-300"></i>
            </button>
            
            <div className="flex justify-center mt-8 space-x-3">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-purple-600' : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    ></button>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;