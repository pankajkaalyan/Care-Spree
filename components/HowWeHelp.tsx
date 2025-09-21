import React from 'react';

const HowWeHelp: React.FC = () => {
  const services = [
    "Breadth of Services",
    "Mental Health Service",
    "Support Coordination",
    "Assisted Daily Living",
    "Housing and Accomodation",
    "Community Participation",
  ];
  return (
    <section className="bg-white dark:bg-gray-900 py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 animate-on-scroll">
            <div className="rounded-lg shadow-lg image-hover-effect">
              <img src="images/7.png" alt="Caregiver assisting a senior" className="rounded-lg shadow-lg w-full h-auto object-cover"/>
            </div>
          </div>
          <div className="order-1 lg:order-2 animate-on-scroll" style={{ transitionDelay: '100ms' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">How Will Our Disability Support Services Help You?</h2>
            <ul className="mt-8 space-y-4">
              {services.map(service => (
                <li key={service} className="flex items-center">
                  <i className="fa-solid fa-check text-red-500 mr-3"></i>
                  <span className="text-gray-700 dark:text-gray-300 text-lg">{service}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 bg-blue-50 dark:bg-blue-900/50 border-l-4 border-blue-500 p-6 flex items-start space-x-4">
                <i className="fa-solid fa-users text-blue-500 dark:text-blue-400 text-3xl mt-1 flex-shrink-0"></i>
                <p className="text-gray-700 dark:text-gray-300">
                    With <strong>25 years of experience</strong>, we provide high-quality service to our customers, delivered on time.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;