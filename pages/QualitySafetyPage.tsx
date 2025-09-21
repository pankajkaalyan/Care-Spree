
import React from 'react';

const QualitySafetyHero = () => (
    <section className="relative bg-purple-800 text-white py-20 md:py-32 bg-cover bg-center" style={{ backgroundImage: "url('./images/quality-safety-hero-bg.svg')" }}>
        <div className="absolute inset-0 bg-purple-900 opacity-60"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold">Quality & Safety</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">Our unwavering commitment to providing the highest standards of care and support in a safe environment.</p>
        </div>
    </section>
);

const SectionCard: React.FC<{ imageUrl: string; title: string; children: React.ReactNode; reverse?: boolean }> = ({ imageUrl, title, children, reverse = false }) => (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className={`animate-on-scroll ${reverse ? 'lg:order-2' : ''}`}>
            <div className="rounded-lg shadow-lg image-hover-effect">
                <img src={imageUrl} alt={title} className="w-full h-auto object-cover"/>
            </div>
        </div>
        <div className={`animate-on-scroll ${reverse ? 'lg:order-1' : ''}`} style={{ transitionDelay: '100ms' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{title}</h2>
            <div className="mt-6 text-gray-600 dark:text-gray-300 space-y-4">
                {children}
            </div>
        </div>
    </div>
);

const QualitySafetyPage: React.FC = () => {
    return (
        <>
            <QualitySafetyHero />
            <section className="py-16 sm:py-24 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-6 space-y-24">
                    <SectionCard imageUrl="images/safety/quality-safety-commitment.jpg" title="Our Commitment to Excellence">
                        <p>At Care Spree, quality and safety are the cornerstones of everything we do. We are dedicated to delivering exceptional disability support services that not only meet but exceed industry standards. Our person-centered approach ensures that every individual's needs, preferences, and goals are at the forefront of their care plan.</p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Continuous improvement through regular feedback and reviews.</li>
                            <li>Rigorous staff screening, training, and professional development.</li>
                            <li>Adherence to a strict code of conduct and ethical practices.</li>
                        </ul>
                    </SectionCard>

                    <SectionCard imageUrl="images/safety/group.png" title="NDIS Practice Standards & Compliance" reverse={true}>
                         <p>We are a registered NDIS provider and are fully compliant with the NDIS Practice Standards and Quality Indicators. This framework guides our service delivery, ensuring we provide safe, high-quality, and reliable support.</p>
                        <p>Our compliance means we are committed to upholding your rights, ensuring your privacy and dignity, and providing a transparent and accountable service. We undergo regular audits and assessments to maintain our registration and demonstrate our commitment to the NDIS Quality and Safeguards Commission.</p>
                    </SectionCard>

                     <SectionCard imageUrl="images/safety/quality-safety-feedback.png" title="Your Feedback Matters">
                        <p>We believe that open communication is key to maintaining high standards. We have a robust system for managing feedback, compliments, and complaints. Your voice helps us to improve our services and address any issues promptly and effectively.</p>
                         <div className="mt-6 bg-blue-50 dark:bg-blue-900/50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                            <p className="text-gray-700 dark:text-gray-300">
                                If you have any feedback or concerns, please do not hesitate to <a href="#contact-us" className="font-bold text-purple-600 dark:text-purple-400">contact us</a> directly. We are here to listen and act.
                            </p>
                        </div>
                    </SectionCard>
                </div>
            </section>
        </>
    );
};

export default QualitySafetyPage;
