

import React from 'react';
import ServiceSidebar from '../components/ServiceSidebar';

const Hero = () => (
    <section className="relative bg-purple-800 text-white py-20 md:py-32 bg-cover bg-center" style={{ backgroundImage: "url('./images/innov-community-participation-hero-bg.svg')" }}>
        <div className="absolute inset-0 bg-purple-900 opacity-60"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold">Innovative Community Participation</h1>
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
                          <img src="./images/innov-community-participation-main.svg" alt="People participating in a creative community activity" className="w-full object-cover" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Engage with Your Community in New Ways</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            "Innovative Community Participation" (NDIS Code 0116) is designed to help individuals find creative and tailored ways to engage with their community based on their personal interests and goals. We go beyond traditional programs to help clients connect with activities that are meaningful to them, whether it's joining a niche hobby group, volunteering for a cause they care about, or starting a small community project.
                        </p>
                        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                            This service focuses on building social skills, fostering relationships, and increasing a sense of belonging. Our support workers collaborate with clients to explore their passions and find or create opportunities for participation that genuinely excite them, leading to more sustainable and fulfilling community involvement.
                        </p>
                    </div>
                    <ServiceSidebar activeService="Innov. Community Participation" />
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


const InnovCommunityParticipationPage: React.FC = () => {
    return (
        <>
            <Hero />
            <MainContent />
            <ProcessSteps />
        </>
    );
};

export default InnovCommunityParticipationPage;