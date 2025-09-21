
import React from 'react';
import ServiceSidebar from '../components/ServiceSidebar';

const PersonalCareHero = () => (
    <section className="relative bg-purple-800 text-white py-20 md:py-32 bg-cover bg-center" style={{ backgroundImage: "url('./images/personal-care-hero-bg.svg')" }}>
        <div className="absolute inset-0 bg-purple-900 opacity-60"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold">Personal Care</h1>
        </div>
    </section>
);

const MainContent = () => {
    return (
        <section className="bg-white dark:bg-gray-900 py-16 sm:py-24">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 animate-on-scroll">
                        <div className="rounded-lg shadow-lg w-full mb-8 image-hover-effect">
                          <img src="./images/personal-care-main.svg" alt="Caregiver assisting with personal care" className="w-full object-cover" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Learn about Personal Care</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            At Care Spree, our Personal Care services (NDIS Code 0107) are designed to provide high-quality disability support that promotes independence, dignity, and well-being. Our team of trained professionals offers a range of services tailored to meet the unique needs of individuals living with disabilities. We understand that everyone requires different levels of assistance, and we are committed to delivering compassionate care that enhances daily living and overall comfort.
                        </p>
                        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                            Personal care is one of the most essential aspects of daily living, and we assist in a way that respects each individual's dignity and personal preferences. Our caregivers help with bathing and showering, ensuring that individuals maintain proper hygiene while feeling safe and comfortable. We also assist with dressing and grooming to help individuals feel confident in their appearance, whether it involves selecting appropriate clothing, brushing hair, or other self-care routines. In addition, we offer support with toileting and continence management, providing discreet and respectful help to those in need. Mobility assistance is available for individuals who require help moving around their home, ensuring they can navigate their space safely. Furthermore, we provide reminders and assistance with medication to ensure that prescribed treatments are followed correctly. Our personal care services are delivered with empathy and professionalism, creating a supportive environment where individuals feel valued and empowered.
                        </p>
                         <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                            By prioritizing personal care, individuals can improve their physical health, mental clarity, and overall quality of life, leading to a happier and healthier lifestyle.
                        </p>
                    </div>
                    <div className="animate-on-scroll" style={{ transitionDelay: '100ms' }}>
                        <ServiceSidebar activeService="Personal Care" />
                    </div>
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
                <div className="animate-on-scroll">
                    <ProcessStep icon="fa-file-alt" title="Fill In The Required Form" />
                </div>
                <div className="animate-on-scroll" style={{ transitionDelay: '100ms' }}>
                    <ProcessStep icon="fa-file-signature" title="Submit Your Original Documents" />
                </div>
                <div className="animate-on-scroll" style={{ transitionDelay: '200ms' }}>
                    <ProcessStep icon="fa-rocket" title="Get The Resource Material" />
                </div>
            </div>
        </div>
    </section>
);


const HelpCard: React.FC<{ icon: string, title: React.ReactNode }> = ({ icon, title }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 h-full">
    <div className="w-24 h-24 rounded-full bg-gray-800 dark:bg-gray-700 flex items-center justify-center mx-auto mb-4 border-4 border-purple-400">
        <i className={`fa-solid ${icon} text-4xl text-white`}></i>
    </div>
    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
  </div>
);


const HereToHelp = () => (
    <section className="bg-gray-700 dark:bg-gray-900 py-16 sm:py-24">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 animate-on-scroll">We're here to help!</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="animate-on-scroll">
                    <HelpCard icon="fa-hand-holding-heart" title={<>Community and self<br/>care</>} />
                </div>
                 <div className="animate-on-scroll" style={{ transitionDelay: '100ms' }}>
                    <HelpCard icon="fa-headset" title={<>Support<br/>Coordination</>} />
                </div>
                <div className="animate-on-scroll" style={{ transitionDelay: '200ms' }}>
                    <HelpCard icon="fa-brain" title={<>Behavior & Allied<br/>Health</>} />
                </div>
                <div className="animate-on-scroll" style={{ transitionDelay: '300ms' }}>
                    <HelpCard icon="fa-users-viewfinder" title={<>Understand the NDIS</>} />
                </div>
            </div>
        </div>
    </section>
);


const PersonalCarePage: React.FC = () => {
    return (
        <>
            <PersonalCareHero />
            <MainContent />
            <ProcessSteps />
            <HereToHelp />
        </>
    );
};

export default PersonalCarePage;