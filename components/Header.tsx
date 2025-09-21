
import React, { useState, useEffect } from 'react';
import { servicesList } from './ServiceSidebar';
import { useTheme } from '../contexts/ThemeContext';

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


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    {
      name: "Who We Are",
      href: "#",
      children: [
        { name: "About Us", href: "#about-us" },
        { name: "FAQs", href: "#faqs" },
        { name: "Our Team", href: "#our-team" },
        { name: "Quality & Safety", href: "#quality-safety" },
      ],
    },
    {
      name: "Our Services",
      href: "#",
      children: servicesList.map(s => ({ name: s.title, href: s.href })),
    },
    { name: "NDIS Calculator", href: "#ndis-calculator" },
    { name: "Referral", href: "#referral" },
    { name: "Contact Us", href: "#contact-us" },
  ];

  const handleSubMenuToggle = (name: string) => {
    setOpenSubMenu(openSubMenu === name ? null : name);
  };
  
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <header className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg dark:shadow-xl dark:shadow-gray-700/60' : 'shadow-sm dark:shadow-md dark:shadow-gray-700/50'}`}>
      <div className={`bg-gray-100 dark:bg-gray-900 hidden md:block transition-all duration-300 ease-in-out ${isScrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
        <div className="container mx-auto px-6 py-2 flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
          <p>Our NDIS experts are ready to assist you! <a href="#contact-us" className="font-semibold text-purple-600">Contact now</a></p>
          <p>Care & Support</p>
        </div>
      </div>

      <nav className={`container mx-auto px-6 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="flex justify-between items-center">
          <a href="#home" aria-label="Go to homepage">
            <Logo />
          </a>
          
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map(link => (
              link.children ? (
                <div key={link.name} className="relative group">
                  <a href={link.href} className="relative group text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center py-2">
                    {link.name}
                    <i className="fa-solid fa-chevron-down ml-2 text-xs"></i>
                     <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 dark:bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
                  </a>
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out invisible group-hover:visible z-10 border border-gray-100 dark:border-gray-700">
                    {link.children.map(child => (
                      <a key={child.name} href={child.href} className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-purple-600 dark:hover:text-purple-400">
                        {child.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a key={link.name} href={link.href} className="relative group text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors py-2">
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 dark:bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
                </a>
              )
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button onClick={toggleTheme} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md" aria-label="Toggle dark mode">
                {theme === 'dark' ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
            </button>
            <a href="#appointment" className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg flex items-center space-x-2">
                <i className="fa fa-calendar-alt"></i>
                <span>Request Appointment</span>
            </a>
          </div>

          <div className="lg:hidden flex items-center space-x-2">
             <button onClick={toggleTheme} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600" aria-label="Toggle dark mode">
                {theme === 'dark' ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
            </button>
            <button onClick={() => setIsMenuOpen(true)} className="text-gray-800 dark:text-gray-200 focus:outline-none p-2 -mr-2 transition-transform duration-200 hover:scale-110" aria-label="Open menu">
              <i className="fa-solid fa-bars-staggered text-2xl"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Off-canvas Menu */}
      <div className={`fixed inset-0 z-[60] transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {/* Overlay */}
        <div onClick={() => setIsMenuOpen(false)} className="absolute inset-0 bg-black/50" aria-hidden="true"></div>

        {/* Menu Panel */}
        <div className={`absolute top-0 right-0 h-full w-80 max-w-[calc(100%-2rem)] bg-white dark:bg-gray-800 shadow-xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full">
            {/* Menu Header */}
            <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Menu</h2>
              <button onClick={() => setIsMenuOpen(false)} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700" aria-label="Close menu">
                <i className="fa-solid fa-times text-xl"></i>
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-grow p-4 overflow-y-auto">
              <div className="flex flex-col space-y-2">
                {navLinks.map(link => (
                  <div key={link.name}>
                    {link.children ? (
                      <>
                        <button onClick={() => handleSubMenuToggle(link.name)} className="w-full flex justify-between items-center text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 py-2 text-left font-medium">
                          <span>{link.name}</span>
                          <i className={`fa-solid fa-chevron-down transition-transform duration-300 ${openSubMenu === link.name ? 'rotate-180' : ''}`}></i>
                        </button>
                        {openSubMenu === link.name && (
                          <div className="pl-4 mt-2 space-y-2 border-l-2 border-purple-100 dark:border-purple-800 ml-2">
                            {link.children.map(child => (
                               <a key={child.name} href={child.href} onClick={() => setIsMenuOpen(false)} className="block text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 py-1">{child.name}</a>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                       <a href={link.href} onClick={() => setIsMenuOpen(false)} className="block text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 py-2 font-medium">{link.name}</a>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Footer of Menu with CTA */}
            <div className="p-4 border-t dark:border-gray-700">
                <a href="#appointment" onClick={() => setIsMenuOpen(false)} className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors text-center flex items-center justify-center space-x-2 w-full">
                  <i className="fa fa-calendar-alt"></i>
                  <span>Request Appointment</span>
                </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;