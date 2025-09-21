

import React from 'react';

const Logo = () => (
    <div className="flex items-center">
        <span 
            className="font-dancing-script text-4xl font-bold text-purple-600 dark:text-purple-400 leading-none"
            style={{ textShadow: '0px 1px 1px rgba(0,0,0,0.1)' }}
        >
            Care Spree
        </span>
    </div>
);

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">{children}</a>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-800 border-t dark:border-gray-700">
            <div className="container mx-auto px-6 py-16">
                 <div className="mb-12 border-b border-gray-200 dark:border-gray-700 pb-12 animate-on-scroll">
                    <div className="space-y-4 max-w-sm">
                        <a href="#home" aria-label="Go to homepage">
                          <Logo />
                        </a>
                        <p className="text-gray-600 dark:text-gray-400">
                            Whether you need to stay in your own home or seek more support, we are here for you.
                        </p>
                        <div className="flex space-x-3 pt-2">
                            <a href="#" className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-purple-600 hover:text-white transition-colors" aria-label="Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-purple-600 hover:text-white transition-colors" aria-label="Twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-purple-600 hover:text-white transition-colors" aria-label="LinkedIn">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-purple-600 hover:text-white transition-colors" aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Column 1: Patient Care */}
                    <div className="space-y-4 animate-on-scroll" style={{ transitionDelay: '100ms' }}>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Patient Care</h3>
                        <ul className="space-y-3">
                            <li><FooterLink href="#">Feedback</FooterLink></li>
                            <li><FooterLink href="#">Visiting Hours and Direction</FooterLink></li>
                            <li><FooterLink href="#">Report An Incidence</FooterLink></li>
                            <li><FooterLink href="#appointment">Request an Appointment</FooterLink></li>
                            <li><FooterLink href="#">Testimonials & Reviews</FooterLink></li>
                            <li><FooterLink href="#referral">Referral</FooterLink></li>
                        </ul>
                    </div>
                    {/* Column 2: Our Practice */}
                    <div className="space-y-4 animate-on-scroll" style={{ transitionDelay: '200ms' }}>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Our Practice</h3>
                        <ul className="space-y-3">
                            <li><FooterLink href="#about-us">About Us</FooterLink></li>
                            <li><FooterLink href="#quality-safety">Quality & Safety</FooterLink></li>
                            <li><FooterLink href="#">Careers</FooterLink></li>
                            <li><FooterLink href="#our-team">Our Team</FooterLink></li>
                            <li><FooterLink href="#faqs">FAQs</FooterLink></li>
                            <li><FooterLink href="#contact-us">Contact & Location</FooterLink></li>
                            <li><FooterLink href="#blog">Our Blogs</FooterLink></li>
                        </ul>
                    </div>
                    {/* Column 3: Support */}
                    <div className="space-y-4 animate-on-scroll" style={{ transitionDelay: '300ms' }}>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Support</h3>
                        <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                            <li className="flex items-start space-x-3"><i className="fa fa-map-marker-alt mt-1 text-purple-600"></i>
                                <span>
                                    Care Spree Pty Ltd<br/>
                                    46 Driftway Street<br/>
                                    AUSTRAL NSW 2179
                                </span>
                            </li>
                            <li className="flex items-start space-x-3"><i className="fa fa-envelope mt-1 text-purple-600"></i><span>info@carespree.com</span></li>
                            <li className="flex items-start space-x-3"><i className="fa fa-phone mt-1 text-purple-600"></i><span>+61 470-219-358</span></li>
                            <li className="flex items-start space-x-3"><i className="fa fa-clock mt-1 text-purple-600"></i><span>Monday to Friday (9am - 4pm)</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 dark:bg-gray-900 py-4">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                    <p>&copy; 2025 Care Spree | Developed by GrowU Digital</p>
                    <div className="mt-2 md:mt-0">
                        <a href="#" className="hover:text-purple-600">Privacy Policy</a>
                        <span className="mx-2">|</span>
                        <a href="#" className="hover:text-purple-600">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;