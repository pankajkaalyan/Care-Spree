

import React from 'react';
import ServiceSidebar from '../components/ServiceSidebar';

const Hero = () => (
    <section className="relative bg-purple-800 text-white py-20 md:py-32 bg-cover bg-center" style={{ backgroundImage: "url('./images/development-life-skills-hero-bg.svg')" }}>
        <div className="absolute inset-0 bg-purple-900 opacity-60"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold">Development-Life Skills</h1>
        </div>
    </section>
);

const MainContent = () => {
    return (
        <section className="bg-white dark:bg-gray-900 py-16 sm:py-24">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <div className="rounded-lg shadow-lg w-full mb-8 image-hover-effect">
                          <img src="./images/development-life-skills-main.svg" alt="Person learning a new skill" className="w-full object-cover" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Building Skills for Greater Independence</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Our "Development-Life Skills" program (NDIS Code 0117) focuses on training and development activities designed to increase your skills for independence and community participation. We offer personalized coaching in a variety of areas to help you achieve your personal goals.
                        </p>
                        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                            This can include practical skills such as financial management and budgeting, communication and social skills, travel training to use public transport confidently, and problem-solving abilities. We work one-on-one or in small groups to provide a supportive learning environment where individuals can grow at their own pace and build the confidence to navigate daily life more independently.
                        </p>
                    </div>
                    <ServiceSidebar activeService="Development-Life Skills" />
                </div>
            </div>
        </section>
    );
};

const ProcessStep: React.FC<{ icon: string, title: string }> = ({ icon, title }) => (
    <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-blue-50 dark:bg-blue-900/40 flex items-center justify-center mb-4">
            <i className={`fa-solid ${icon} text-4xl text-blue-500 dark:text-blue-400`}></i>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
    </div>
);


const ProcessSteps = () => (
    <section className="bg-gray-50/70 dark:bg-gray-800 py-16 sm:py-24">
        <div className="container mx-auto px-6">
            <div className="grid sm:grid-cols-3 gap-12 text-center">
                <ProcessStep icon="fa-file-alt" title="Fill In The Required Form" />
                <ProcessStep icon="fa-file-signature" title="Submit Your Original Documents" />
                <ProcessStep icon="fa-rocket" title="Get The Resource Material" />
            </div>
        </div>
    </section>
);


const DevelopmentLifeSkillsPage: React.FC = () => {
    return (
        <>
            <Hero />
            <MainContent />
            <ProcessSteps />
        </>
    );
};

export default DevelopmentLifeSkillsPage;