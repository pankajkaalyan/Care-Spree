import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-50/50 dark:bg-gray-800 relative overflow-hidden">
        <div className="container mx-auto px-6 py-16 md:py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative z-10">
                    <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider animate-on-scroll">WELCOME TO CARE SPREE</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mt-2 animate-on-scroll" style={{ transitionDelay: '100ms' }}>
                        The Simple Act <br/> of <span className="text-blue-600 dark:text-blue-400">Caring</span> is <br/> Heroic
                    </h1>
                    <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-lg animate-on-scroll" style={{ transitionDelay: '200ms' }}>
                        Care Spree provides individualized disability support to all people who access our services. Our goal is to help each person achieve the best life possible.
                    </p>
                    <div className="mt-8 animate-on-scroll" style={{ transitionDelay: '300ms' }}>
                        <a href="#contact-us" className="bg-purple-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-purple-700 transition-colors shadow-lg">
                            GET IN TOUCH
                        </a>
                    </div>
                </div>

                <div className="relative h-full hidden lg:block">
                    <div className="absolute inset-0 flex items-center justify-center animate-on-scroll" style={{ transitionDelay: '200ms' }}>
                        <img 
                            src="images/home/home-page-01.png" 
                            alt="Smiling caregiver assisting a senior woman with a tablet computer" 
                            className="object-cover h-full w-auto max-w-none max-h-[600px] rounded-lg"
                        />
                    </div>
                </div>
                 <div className="lg:hidden mt-8 animate-on-scroll">
                    <img 
                        src="./images/hero-mobile.svg" 
                        alt="Smiling caregiver and senior woman using a tablet" 
                        className="rounded-lg w-full object-cover"
                    />
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;