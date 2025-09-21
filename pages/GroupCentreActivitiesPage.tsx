

import React from 'react';
import ServiceSidebar from '../components/ServiceSidebar';

const Hero = () => (
    <section className="relative bg-purple-800 text-white py-20 md:py-32 bg-cover bg-center" style={{ backgroundImage: "url('./images/group-centre-activities-hero-bg.svg')" }}>
        <div className="absolute inset-0 bg-purple-900 opacity-60"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold">Group/Centre Activities</h1>
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
                           <img src="./images/group-centre-activities-main.svg" alt="People in a group activity at a community centre" className="w-full object-cover" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Socialize and Learn in a Supportive Setting</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Our "Group/Centre Activities" service (NDIS Code 0136) offers a variety of programs conducted in a group setting, either at our facilities or in the community. These activities are designed to promote socialization, peer support, and skill development in a friendly and structured environment.
                        </p>
                        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                            Activities can range from arts and crafts, cooking classes, and fitness groups to educational workshops and social outings. Participating in group activities is an excellent way to meet new people, share experiences, and learn new skills while having fun. Our trained staff facilitate the groups to ensure they are inclusive, engaging, and beneficial for all participants.
                        </p>
                    </div>
                    <ServiceSidebar activeService="Group/Centre Activities" />
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


const GroupCentreActivitiesPage: React.FC = () => {
    return (
        <>
            <Hero />
            <MainContent />
            <ProcessSteps />
        </>
    );
};

export default GroupCentreActivitiesPage;