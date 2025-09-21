import React from 'react';

const AppointmentHero = () => (
    <section className="relative bg-purple-800 text-white py-20 md:py-32 bg-cover bg-center" style={{ backgroundImage: "url('./images/appointment-hero-bg.svg')" }}>
        <div className="absolute inset-0 bg-purple-900 opacity-60"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold">Book Appointment</h1>
        </div>
    </section>
);

const AppointmentForm = () => (
    <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Book An Appointment</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Fill in the form</p>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name <span className="text-red-500">*</span></label>
                    <div className="relative">
                        <i className="fa fa-user absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                        <input type="text" id="name" name="name" placeholder="Enter name" className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md focus:ring-purple-500 focus:border-purple-500" required />
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email <span className="text-red-500">*</span></label>
                    <div className="relative">
                        <i className="fa fa-envelope absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                        <input type="email" id="email" name="email" placeholder="Enter email" className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md focus:ring-purple-500 focus:border-purple-500" required />
                    </div>
                </div>
                 <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone <span className="text-red-500">*</span></label>
                    <div className="relative">
                        <i className="fa fa-phone absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                        <input type="tel" id="phone" name="phone" placeholder="Enter phone number" className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md focus:ring-purple-500 focus:border-purple-500" required />
                    </div>
                </div>
                <div>
                    <label htmlFor="dob" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Date of Birth <span className="text-red-500">*</span></label>
                    <div className="relative">
                        <input type="text" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} id="dob" name="dob" placeholder="dd-mm-yyyy" className="w-full pl-4 pr-10 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md focus:ring-purple-500 focus:border-purple-500" required />
                        <i className="fa fa-calendar-alt absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                    </div>
                </div>
                <div>
                    <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Appointment Date <span className="text-red-500">*</span></label>
                    <div className="relative">
                        <input type="text" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} id="appointmentDate" name="appointmentDate" placeholder="dd-mm-yyyy" className="w-full pl-4 pr-10 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md focus:ring-purple-500 focus:border-purple-500" required />
                        <i className="fa fa-calendar-alt absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                    </div>
                </div>
                <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Select Service <span className="text-red-500">*</span></label>
                    <select id="service" name="service" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md focus:ring-purple-500 focus:border-purple-500" required>
                        <option value="">-- Select Service --</option>
                        <option value="personal-care">Personal Care</option>
                        <option value="domestic-help">Domestic Help</option>
                        <option value="transportation">Transportation</option>
                        <option value="meal-preparation">Meal Preparation</option>
                    </select>
                </div>
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Additional Message</label>
                <textarea id="message" name="message" rows={4} placeholder="Message" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md focus:ring-purple-500 focus:border-purple-500"></textarea>
            </div>
            <div className="flex items-center p-2 border border-gray-200 dark:border-gray-600 rounded-md bg-gray-50/50 dark:bg-gray-700/50">
                <div className="flex items-center space-x-4">
                    <input type="checkbox" id="recaptcha" className="h-6 w-6 border-gray-300 dark:border-gray-500 rounded text-purple-600 focus:ring-purple-500 bg-gray-100 dark:bg-gray-900" />
                    <label htmlFor="recaptcha" className="text-gray-700 dark:text-gray-300">I'm not a robot</label>
                </div>
                <div className="ml-auto text-center">
                    <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA logo" width="32" height="32" className="inline-block" />
                    <p className="text-xs text-gray-500">reCAPTCHA</p>
                    <p className="text-[10px] text-gray-400">Privacy - Terms</p>
                </div>
            </div>
            <div>
                <button type="submit" className="bg-purple-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-purple-700 transition-colors shadow-md flex items-center space-x-2">
                    <i className="fa fa-check"></i>
                    <span>Apply Now</span>
                </button>
            </div>
        </form>
    </div>
);

const ContactInfoCard = () => (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl h-full border border-gray-100 dark:border-gray-700">
        <div className="space-y-8">
            <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                    <i className="fa fa-map-marker-alt text-2xl text-blue-600 dark:text-blue-400"></i>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Our Address</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                        46 Driftway Street<br/>
                        AUSTRAL NSW 2179
                    </p>
                </div>
            </div>
            <hr className="dark:border-gray-700"/>
            <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                    <i className="fa fa-phone-alt text-2xl text-blue-600 dark:text-blue-400"></i>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Contact Us</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">+61 470-219-358</p>
                </div>
            </div>
             <hr className="dark:border-gray-700"/>
            <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                    <i className="fa fa-clock text-2xl text-blue-600 dark:text-blue-400"></i>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Opening Hours</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">Monday to Friday (9am - 4pm)</p>
                </div>
            </div>
        </div>
    </div>
);

const AppointmentPage: React.FC = () => {
    return (
        <>
            <AppointmentHero />
            <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12 items-start">
                        <div className="lg:col-span-2 animate-on-scroll">
                            <AppointmentForm />
                        </div>
                        <div className="animate-on-scroll" style={{ transitionDelay: '100ms' }}>
                            <ContactInfoCard />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AppointmentPage;