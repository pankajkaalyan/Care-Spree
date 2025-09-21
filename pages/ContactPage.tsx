import React from 'react';

const ContactHero = () => (
    <section className="relative bg-purple-800 text-white py-20 md:py-32 bg-cover bg-center" style={{ backgroundImage: "url('./images/contact-hero-bg.svg')" }}>
        <div className="absolute inset-0 bg-purple-900 opacity-60"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
        </div>
    </section>
);

const ContactDetails = () => (
    <div className="bg-gradient-to-br from-purple-700 to-purple-900 text-white rounded-lg p-8 shadow-lg h-full">
        <h3 className="text-2xl font-bold mb-4 border-b pb-2">Keep in Touch</h3>
        <div className="space-y-6 mt-6">
            <div>
                 <p className="font-semibold text-lg">
                    Care Spree Pty Ltd<br/>
                    46 Driftway Street<br/>
                    AUSTRAL NSW 2179
                 </p>
            </div>
            <div>
                <h4 className="font-bold text-xl">Free Customer Care</h4>
                <a href="tel:+61470219358" className="text-lg hover:underline">+61 470-219-358</a>
            </div>
            <div>
                <h4 className="font-bold text-xl">Need Live Support</h4>
                <a href="mailto:info@carespree.com" className="text-lg hover:underline">info@carespree.com</a>
            </div>
        </div>
    </div>
);

const ContactForm = () => (
    <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name <span className="text-red-500">*</span></label>
                <div className="relative">
                    <i className="fa fa-user absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                    <input type="text" id="name" name="name" placeholder="Your Name" className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md focus:ring-purple-500 focus:border-purple-500" required />
                </div>
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email <span className="text-red-500">*</span></label>
                <div className="relative">
                    <i className="fa fa-envelope absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                    <input type="email" id="email" name="email" placeholder="Email Address" className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md focus:ring-purple-500 focus:border-purple-500" required />
                </div>
            </div>
        </div>
        <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Address <span className="text-red-500">*</span></label>
            <div className="relative">
                <i className="fa fa-map-marker-alt absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                <input type="text" id="address" name="address" placeholder="Address" className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md focus:ring-purple-500 focus:border-purple-500" required />
            </div>
        </div>
        <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message <span className="text-red-500">*</span></label>
            <textarea id="message" name="message" rows={5} placeholder="Write Your Comment*" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md focus:ring-purple-500 focus:border-purple-500" required></textarea>
        </div>
        <div>
            <button type="submit" className="bg-purple-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-purple-700 transition-colors shadow-md flex items-center space-x-2">
                <span>SEND YOUR MESSAGE</span>
                <i className="fa fa-arrow-right"></i>
            </button>
        </div>
    </form>
);


const ContactPage: React.FC = () => {
    return (
        <>
            <ContactHero />

            <section className="py-16 sm:py-24 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-6">
                    <div className="text-left mb-12 animate-on-scroll">
                        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">HOW CAN WE HELP YOU</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">Need disability assistance? <br/>Please contact us.</h2>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-on-scroll">
                           <div className="rounded-lg shadow-lg image-hover-effect">
                             <img src="images/9.png" alt="Caregiver with senior woman" className="w-full h-auto object-cover" />
                           </div>
                        </div>
                        <div className="animate-on-scroll" style={{ transitionDelay: '100ms' }}>
                           <ContactDetails />
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 animate-on-scroll">Let's Get in Touch</h2>
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="animate-on-scroll">
                           <ContactForm />
                        </div>
                        <div className="animate-on-scroll" style={{ transitionDelay: '100ms' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.2989104118063!2d150.78262607626966!3d-33.90795592354877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12911107530635%3A0xe10464f84236e897!2s46%20Driftway%20St%2C%20Austral%20NSW%202179%2C%20Australia!5e0!3m2!1sen!2sus!4v1721245059632!5m2!1sen!2sus"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-lg shadow-md"
                                title="Google map of Care Spree location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactPage;