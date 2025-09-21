import React from 'react';

const ReferralHero = () => (
    <section className="relative bg-purple-800 text-white py-20 md:py-32 bg-cover bg-center" style={{ backgroundImage: "url('./images/referral-hero-bg.svg')" }}>
        <div className="absolute inset-0 bg-purple-900 opacity-60"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold">Referral Form</h1>
        </div>
    </section>
);

const InputField: React.FC<{ label: string; type: string; placeholder: string; icon: string; name: string; required?: boolean }> = ({ label, type, placeholder, icon, name, required = true }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{label} {required && <span className="text-red-500">*</span>}</label>
        <div className="relative">
            {icon && <i className={`fa ${icon} absolute left-3 top-1/2 -translate-y-1/2 text-gray-400`}></i>}
            <input 
                type={type} 
                id={name} 
                name={name} 
                placeholder={placeholder} 
                className={`w-full ${icon ? 'pl-10' : 'pl-4'} pr-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md focus:ring-purple-500 focus:border-purple-500`} 
                required={required} 
            />
        </div>
    </div>
);

const ReferralForm = () => {
    return (
        <section className="bg-gray-50 dark:bg-gray-800 py-16 sm:py-24">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 p-8 md:p-12 rounded-lg shadow-lg animate-on-scroll">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">Referral Form</h2>
                    
                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                        {/* Referrer Details */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 pb-2 border-b-2 border-gray-200 dark:border-gray-700 mb-6">Referrer Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <InputField label="Full Name" name="referrerName" type="text" placeholder="Enter Name" icon="fa-user" />
                                <InputField label="Email" name="referrerEmail" type="email" placeholder="Enter Email" icon="fa-envelope" />
                                <InputField label="Phone Number" name="referrerPhone" type="tel" placeholder="0412 345 678" icon="fa-phone" />
                            </div>
                        </div>

                        {/* Participant Details */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 pb-2 border-b-2 border-gray-200 dark:border-gray-700 mb-6">Participant Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <InputField label="Full Name" name="participantName" type="text" placeholder="Enter Full name" icon="fa-user" />
                                 <div>
                                    <label htmlFor="dob" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Date of Birth <span className="text-red-500">*</span></label>
                                    <div className="relative">
                                        <input 
                                            type="text" 
                                            id="dob" 
                                            name="dob" 
                                            onFocus={(e) => (e.target.type = 'date')}
                                            onBlur={(e) => (e.target.type = 'text')}
                                            placeholder="dd-mm-yyyy" 
                                            className="w-full pl-4 pr-10 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md focus:ring-purple-500 focus:border-purple-500" 
                                            required 
                                        />
                                        <i className="fa fa-calendar-alt absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6">
                                <InputField label="Address" name="address" type="text" placeholder="Enter Address" icon="fa-map-marker-alt" />
                            </div>
                        </div>

                        {/* Referral Details */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 pb-2 border-b-2 border-gray-200 dark:border-gray-700 mb-6">Referral Details</h3>
                            <div>
                               <label htmlFor="reason" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Reason for Referral <span className="text-red-500">*</span></label>
                               <textarea id="reason" name="reason" rows={5} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md focus:ring-purple-500 focus:border-purple-500" required></textarea>
                            </div>
                        </div>

                        {/* reCAPTCHA placeholder */}
                        <div className="flex items-center p-2 border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50/50 dark:bg-gray-800/50">
                            <div className="flex items-center space-x-4">
                                <input type="checkbox" id="recaptcha" className="h-6 w-6 border-gray-300 dark:border-gray-600 rounded text-purple-600 focus:ring-purple-500 bg-gray-100 dark:bg-gray-900" />
                                <label htmlFor="recaptcha" className="text-gray-700 dark:text-gray-300">I'm not a robot</label>
                            </div>
                             <div className="ml-auto text-center">
                                <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA logo" width="32" height="32" className="inline-block" />
                                <p className="text-xs text-gray-500">reCAPTCHA</p>
                                <p className="text-[10px] text-gray-400">Privacy - Terms</p>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="text-left">
                            <button type="submit" className="bg-gray-300 text-gray-500 px-8 py-3 rounded-md font-semibold hover:bg-purple-600 hover:text-white transition-colors shadow-md flex items-center space-x-2">
                                <i className="fa fa-paper-plane"></i>
                                <span>Submit</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};


const ReferralPage: React.FC = () => {
    return (
        <>
            <ReferralHero />
            <ReferralForm />
        </>
    );
};

export default ReferralPage;