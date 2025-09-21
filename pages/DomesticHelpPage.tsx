

import React from 'react';
import ServiceSidebar from '../components/ServiceSidebar';

const DomesticHelpHero = () => (
    <section className="relative bg-purple-800 text-white py-20 md:py-32 bg-cover bg-center" style={{ backgroundImage: "url('images/services/Domestic-Help.jpeg')" }}>
        <div className="absolute inset-0 bg-purple-900 opacity-60"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold">Domestic Help</h1>
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
                           <img src="images/services/Domestic-Help.jpeg" alt="Caregiver making a bed" className="w-full object-cover" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Learn about Domestic Help</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Maintaining a clean and comfortable home environment is crucial for physical and mental well-being. That's why we offer Domestic Assistance (NDIS Code 0120) to help with everyday household tasks. Our support workers assist with cleaning, vacuuming, dusting, and mopping to ensure that living spaces remain fresh and hygienic. We also provide laundry services, including washing, drying, and ironing clothes, to help individuals manage their daily needs more efficiently. Additionally, we offer bed-making and linen-changing services to ensure a comfortable and well-kept home.
                        </p>
                        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                            Hiring domestic help can significantly improve the overall quality of of life by reducing stress and allowing individuals to focus on work, family, or personal interests. Professional domestic workers or household staff can be employed on a full-time, part-time, or as-needed basis, depending on the household's needs. Their services contribute to maintaining hygiene, ensuring a comfortable living environment, and offering essential support to families and individuals who require extra care.
                        </p>
                         <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                            Our team is also happy to assist with general tidying and organizing, ensuring that living spaces remain functional and clutter-free. Whether someone requires occasional help or ongoing support, we tailor our services to meet individual needs, ensuring that everyone enjoys a clean and welcoming home. By having reliable domestic help, households can function more smoothly, and individuals can enjoy a cleaner and more organized home, leading to a more balanced and stress-free lifestyle.
                        </p>
                    </div>
                    <ServiceSidebar activeService="Domestic Help" />
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


const DomesticHelpPage: React.FC = () => {
    return (
        <>
            <DomesticHelpHero />
            <MainContent />
            <ProcessSteps />
            <HereToHelp />
        </>
    );
};

export default DomesticHelpPage;