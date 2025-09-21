

import React from 'react';
import ServiceSidebar from '../components/ServiceSidebar';

const Hero = () => (
    <section className="relative bg-purple-800 text-white py-20 md:py-32 bg-cover bg-center" style={{ backgroundImage: "url('./images/daily-tasks-hero-bg.svg')" }}>
        <div className="absolute inset-0 bg-purple-900 opacity-60"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold">Daily Tasks/Shared Living</h1>
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
                           <img src="./images/daily-tasks-main.svg" alt="People living together in a shared space" className="w-full object-cover" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Thriving in a Shared Environment</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                             Our "Daily Tasks/Shared Living" service (NDIS Code 0115) focuses on providing support within a shared living environment. We assist with daily routines, household management, and cooperative living skills to ensure a harmonious and supportive home. This can include help with cooking, cleaning, personal care, and managing shared responsibilities.
                        </p>
                        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                            We work with residents to develop communication skills, resolve conflicts, and build positive relationships with housemates. Our aim is to create a comfortable and empowering living situation where individuals can develop their independence while benefiting from a supportive community setting. This service is ideal for those in supported independent living (SIL) arrangements or other shared homes.
                        </p>
                    </div>
                    <ServiceSidebar activeService="Daily Tasks/Shared Living" />
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


const DailyTasksSharedLivingPage: React.FC = () => {
    return (
        <>
            <Hero />
            <MainContent />
            <ProcessSteps />
        </>
    );
};

export default DailyTasksSharedLivingPage;