

import React from 'react';
import ServiceSidebar from '../components/ServiceSidebar';

const TransportationHero = () => (
    <section className="relative bg-purple-800 text-white py-20 md:py-32 bg-cover bg-center" style={{ backgroundImage: "url('./images/transportation-hero-bg.svg')" }}>
        <div className="absolute inset-0 bg-purple-900 opacity-60"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold">Transportation</h1>
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
                          <img src="./images/transportation-main.svg" alt="Caregiver helping a person into a car" className="w-full object-cover" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Learn about Transportation</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Getting from one place to another can be challenging for individuals with disabilities, which is why we provide Transportation Services (NDIS Code 0108) to ensure that our clients can travel safely and comfortably. Whether it's a trip to a medical appointment, therapy session, work, or social outing, we are committed to providing reliable and accessible transportation. Our vehicles are designed to accommodate mobility aids, ensuring a smooth and stress-free journey. We also assist individuals in getting in and out of vehicles and accompany them to their destination if needed.
                        </p>
                        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                            Our transportation services are more than just a ride—we aim to provide freedom and independence, allowing individuals to stay connected with their community and maintain an active lifestyle. Public transportation, including buses, trains, and subways, provides affordable and environmentally friendly commuting options, reducing traffic congestion and pollution. Private transportation, such as personal vehicles or ride-sharing services, offers flexibility and convenience for those who prefer direct routes and personal comfort. Additionally, alternative transportation methods like cycling and walking promote a healthier lifestyle while contributing to environmental sustainability.
                        </p>
                         <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                            Efficient transportation systems are essential for urban development, connecting communities, and improving access to essential services. Whether for daily commutes, business operations, or travel, transportation plays a crucial role in shaping modern lifestyles and economic growth.
                        </p>
                    </div>
                    <ServiceSidebar activeService="Transportation" />
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


const TransportationPage: React.FC = () => {
    return (
        <>
            <TransportationHero />
            <MainContent />
            <ProcessSteps />
            <HereToHelp />
        </>
    );
};

export default TransportationPage;