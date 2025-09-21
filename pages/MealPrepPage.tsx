

import React from 'react';
import ServiceSidebar from '../components/ServiceSidebar';

const MealPrepHero = () => (
    <section className="relative bg-purple-800 text-white py-20 md:py-32 bg-cover bg-center" style={{ backgroundImage: "url('./images/meal-prep-hero-bg.svg')" }}>
        <div className="absolute inset-0 bg-purple-900 opacity-60"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold">Meal Preparation</h1>
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
                           <img src="./images/meal-prep-main.svg" alt="Caregiver preparing a meal" className="w-full object-cover" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Learn about Meal Preparation</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Proper nutrition plays a significant role in maintaining good health, which is why we offer Meal Preparation Services tailored to individual dietary needs and preferences. Our caregivers help plan and prepare meals that are both nutritious and delicious, ensuring that individuals receive balanced meals that support their overall well-being. Whether it's cooking from scratch, assisting with grocery shopping, or simply reheating meals, we customize our support to suit each person's lifestyle and abilities. We also ensure that food is prepared in a way that is safe and easy to consume, accommodating any dietary restrictions or swallowing difficulties. Our goal is to make mealtimes enjoyable and stress-free while promoting a healthy diet that supports long-term wellness.
                        </p>
                        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                            Meal preparation not only promotes healthier eating habits but also provides convenience for busy schedules, allowing individuals to enjoy homemade, nutritious meals without spending excessive time in the kitchen. It supports portion control, saves money, and encourages mindful eating, making it an essential practice for anyone looking to maintain a well-balanced lifestyle.
                        </p>
                    </div>
                    <ServiceSidebar activeService="Meal Preparation" />
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


const HelpCard: React.FC<{ icon: string, title: React.ReactNode }> = ({ icon, title }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-2">
    <div className="w-24 h-24 rounded-full bg-gray-800 dark:bg-gray-700 flex items-center justify-center mx-auto mb-4 border-4 border-purple-400">
        <i className={`fa-solid ${icon} text-4xl text-white`}></i>
    </div>
    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
  </div>
);


const HereToHelp = () => (
    <section className="bg-gray-700 dark:bg-gray-900 py-16 sm:py-24">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">We're here to help!</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <HelpCard icon="fa-hand-holding-heart" title={<>Community and self<br/>care</>} />
                <HelpCard icon="fa-headset" title={<>Support<br/>Coordination</>} />
                <HelpCard icon="fa-brain" title={<>Behavior & Allied<br/>Health</>} />
                <HelpCard icon="fa-users-viewfinder" title={<>Understand the NDIS</>} />
            </div>
        </div>
    </section>
);


const MealPrepPage: React.FC = () => {
    return (
        <>
            <MealPrepHero />
            <MainContent />
            <ProcessSteps />
            <HereToHelp />
        </>
    );
};

export default MealPrepPage;