import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-purple-700 to-blue-900 rounded-2xl shadow-2xl overflow-hidden animate-on-scroll">
          <div className="grid lg:grid-cols-2">
            {/* Left Side: Contact Info */}
            <div className="p-8 md:p-12 flex items-center bg-gray-800/20">
              <div className="flex items-center space-x-6">
                <div className="flex-shrink-0 w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-phone-volume text-white text-4xl"></i>
                </div>
                <div>
                    <p className="text-white opacity-80 text-lg">Call for more info</p>
                    <p className="text-white text-3xl font-bold">+61 470-219-358</p>
                </div>
              </div>
            </div>
            {/* Right Side: CTA */}
            <div className="p-8 md:p-12">
               <div className="lg:flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white">Need a Specialised Disability Accommodation?</h3>
                  <p className="mt-2 text-white/80 max-w-md">
                    A well-designed house can provide more independent living arrangements and increased community connection. Explore our available accommodations now.
                  </p>
                </div>
                <div className="mt-6 lg:mt-0 lg:ml-6 flex-shrink-0">
                  <a href="#appointment" className="bg-gray-800 text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-900 transition-colors inline-block whitespace-nowrap">
                    Request An Appointment <i className="fa fa-arrow-right ml-2"></i>
                  </a>
                </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;