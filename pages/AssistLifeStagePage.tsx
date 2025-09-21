

import React from 'react';
import ServiceSidebar from '../components/ServiceSidebar';

const Hero = () => (
    <section className="relative bg-purple-800 text-white py-20 md:py-32 bg-cover bg-center" style={{ backgroundImage: "url('./images/assist-life-stage-hero-bg.svg')" }}>
        <div className="absolute inset-0 bg-purple-900 opacity-60"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold">Assist-Life Stage, Transition</h1>
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
                          <img src="images/services/assist-life-stage-transition.jpeg" alt="Person moving into a new stage of life" className="w-full object-cover" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Support Through Life's Transitions</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Our "Assist-Life Stage, Transition" service (NDIS Code 0106) is designed to support individuals through significant life changes. Whether it's starting school, leaving home for the first time, finding a new job, or transitioning to retirement, these moments can be challenging. Care Spree provides tailored support to help manage these transitions smoothly and build the confidence and skills needed for the next chapter.
                        </p>
                        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                            We offer a range of assistance, including developing life skills for independent living, providing guidance on managing new responsibilities, and offering emotional support to navigate the changes. Our goal is to empower individuals to face new opportunities with optimism and preparedness, ensuring that every transition is a positive step forward.
                        </p>
                    </div>
                    <ServiceSidebar activeService="Life Stage, Transition" />
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


const AssistLifeStagePage: React.FC = () => {
    return (
        <>
            <Hero />
            <MainContent />
            <ProcessSteps />
        </>
    );
};

export default AssistLifeStagePage;