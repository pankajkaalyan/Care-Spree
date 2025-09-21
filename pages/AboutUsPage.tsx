
import React, { useState } from 'react';

const AboutUsHero = () => (
    <section className="relative bg-purple-800 text-white py-20 md:py-32 bg-cover bg-center" style={{ backgroundImage: "url('./images/about-hero-bg.svg')" }}>
        <div className="absolute inset-0 bg-purple-900 opacity-60"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
        </div>
    </section>
);

const WhoWeAreSection = () => {
    const points = [
        "Compassionate Care for a Better Life",
        "Tailored Support to Meet Your Needs",
        "Trusted Experts in Quality Care Services",
        "Empowering Lives with Dignity and Respect",
    ];
    return (
        <section className="bg-white dark:bg-gray-900 py-16 sm:py-24">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative animate-on-scroll">
                        <div className="rounded-lg shadow-lg relative z-10 image-hover-effect">
                          <img src="./images/about-who-we-are-main.svg" alt="Caregiver assisting elderly" className="w-full h-full object-cover"/>
                        </div>
                        <div className="rounded-lg shadow-lg absolute -bottom-12 -right-12 border-8 border-white dark:border-gray-900 hidden md:block image-hover-effect">
                          <img src="./images/about-who-we-are-secondary.svg" alt="Group of seniors" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                    <div className="animate-on-scroll" style={{ transitionDelay: '100ms' }}>
                        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">SYDNEY-BASED NDIS AGENCY</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">Who Funds Disability Services</h2>
                        <p className="mt-6 text-gray-600 dark:text-gray-300">
                            At Care Spree, we provide compassionate and high-quality care to individuals with disabilities and those in need of support. Our team of trained professionals is committed to enhancing the quality of life for our clients by offering personalized services that promote independence, dignity, and well-being. We believe that everyone deserves the right to live comfortably, safely, and with respect, and we strive to make that possible through our tailored care solutions.
                        </p>
                        <ul className="mt-6 space-y-4">
                            {points.map((point, index) => (
                                <li key={index} className="flex items-center">
                                <div className="bg-green-100 dark:bg-green-900/50 rounded-full p-1 mr-3">
                                    <i className="fa fa-check text-green-600 dark:text-green-400"></i>
                                </div>
                                <span className="text-gray-700 dark:text-gray-300 font-medium">{point}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 space-y-4">
                            <div className="bg-pink-50 dark:bg-pink-900/50 border-l-4 border-pink-400 dark:border-pink-600 p-4 flex items-start space-x-4 rounded-r-lg">
                                <i className="fa-solid fa-hands-helping text-pink-500 dark:text-pink-400 text-3xl mt-1"></i>
                                <p className="text-gray-700 dark:text-gray-300">If the NDIS is available in your area and you don't receive disability support, you can <a href="#contact-us" className="font-bold text-purple-600 dark:text-purple-400">reach us for assistance.</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const WhyChooseUsSection = () => {
    const items = [
        { 
            imageUrl: './images/why-choose-us-staff.svg', 
            title: 'Experienced Staff',
            description: 'Our team is highly trained and dedicated to providing the best possible support with compassion and expertise.'
        },
        { 
            imageUrl: './images/why-choose-us-people.svg', 
            title: 'The right people',
            description: 'We carefully match you with support workers who fit your unique needs, personality, and preferences.'
        },
        { 
            imageUrl: './images/why-choose-us-care.svg', 
            title: 'Preferred care',
            description: 'Your choices and preferences are always at the heart of our service, ensuring care is delivered your way.'
        },
        { 
            imageUrl: './images/why-choose-us-partner.svg', 
            title: 'Your preferred Partner',
            description: 'We collaborate with you as a trusted partner to help you achieve your goals and live a more fulfilling life.'
        }
    ];
    return (
        <section className="bg-gray-50 dark:bg-gray-800 py-16 sm:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 animate-on-scroll">
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">WHY CHOOSE US</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">Empowering individuals with disabilities to live their way.</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((item, index) => (
                        <div key={item.title} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg flex flex-col text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
                            <div className="w-full h-48 rounded-t-lg overflow-hidden image-hover-effect">
                                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                                <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm flex-grow">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


const MissionVissionSection = () => {
    const [activeTab, setActiveTab] = useState('carespee');

    const tabContent: { [key: string]: { title: string; points: string[]; description: string } } = {
        carespee: {
            title: 'Care Spree',
            points: [
                "Inclusive and Supportive Environment",
                "Compassionate and Respectful Approach",
                "Commitment to Quality & Empowering Clients"
            ],
            description: "At Care Spree, we take a person-centered approach, prioritizing each individual's unique needs and preferences to provide the best possible care. Our goal is to foster a supportive and inclusive environment where clients feel valued, empowered, and well cared for."
        },
        mission: {
            title: 'Our Mission',
            points: [
                "Provide exceptional care",
                "Promote independence",
                "Enhance quality of life"
            ],
            description: "Our mission is to empower individuals with disabilities by providing personalized, high-quality support services that promote independence, dignity, and a greater quality of life within their communities."
        },
        vision: {
            title: 'Our Vision',
            points: [
                "A community of inclusion",
                "Leader in disability care",
                "Empowerment for all"
            ],
            description: "We envision a world where every individual with a disability has the opportunity to live a fulfilling and independent life, fully integrated into a supportive and inclusive community."
        }
    };

    const currentContent = tabContent[activeTab];

    return (
        <section className="bg-white dark:bg-gray-900 py-16 sm:py-24">
            <div className="container mx-auto px-6">
                 <div className="text-center mb-12 animate-on-scroll">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Who Funds Disability Services through NDIS?</h2>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="animate-on-scroll">
                        <div className="flex flex-wrap space-x-1 border-b dark:border-gray-700 mb-6">
                            <button onClick={() => setActiveTab('carespee')} className={`px-4 sm:px-6 py-3 font-semibold text-sm sm:text-base transition-colors duration-300 ${activeTab === 'carespee' ? 'border-b-2 border-purple-600 text-purple-600' : 'text-gray-500 dark:text-gray-400 hover:text-purple-600'}`}>Care Spree</button>
                            <button onClick={() => setActiveTab('mission')} className={`px-4 sm:px-6 py-3 font-semibold text-sm sm:text-base transition-colors duration-300 ${activeTab === 'mission' ? 'border-b-2 border-purple-600 text-purple-600' : 'text-gray-500 dark:text-gray-400 hover:text-purple-600'}`}>Our Mission</button>
                            <button onClick={() => setActiveTab('vision')} className={`px-4 sm:px-6 py-3 font-semibold text-sm sm:text-base transition-colors duration-300 ${activeTab === 'vision' ? 'border-b-2 border-purple-600 text-purple-600' : 'text-gray-500 dark:text-gray-400 hover:text-purple-600'}`}>Our Vision</button>
                        </div>
                        <div className="p-1">
                            <p className="text-gray-600 dark:text-gray-300 mb-6">{currentContent.description}</p>
                            <ul className="space-y-4">
                                {currentContent.points.map(point => (
                                     <li key={point} className="flex items-center">
                                        <div className="bg-green-100 dark:bg-green-900/50 rounded-full p-1 mr-3 flex-shrink-0">
                                            <i className="fa fa-check text-green-600 dark:text-green-400"></i>
                                        </div>
                                        <span className="text-gray-700 dark:text-gray-300 font-medium">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="animate-on-scroll" style={{ transitionDelay: '100ms' }}>
                        <div className="rounded-lg shadow-lg image-hover-effect">
                           <img src="./images/about-mission-vision.svg" alt="Holding hands" className="w-full h-auto object-cover"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const AboutUsPage: React.FC = () => {
    return (
        <>
            <AboutUsHero />
            <WhoWeAreSection />
            <WhyChooseUsSection />
            <MissionVissionSection />
        </>
    );
};

export default AboutUsPage;
