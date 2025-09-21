import React from 'react';

const FundingInfo: React.FC = () => {
  const points = [
    "Compassionate Care for a Better Life",
    "Tailored Support to Meet Your Needs",
    "Trusted Experts in Quality Care Services",
    "Empowering Lives with Dignity and Respect",
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-on-scroll">
            <div className="rounded-lg shadow-lg relative z-10 image-hover-effect">
              <img src="images/12.png" alt="Caregiver assisting elderly" className="w-full h-full object-cover"/>
            </div>
            {/* <div className="rounded-lg shadow-lg absolute -bottom-12 -right-12 border-8 border-white dark:border-gray-900 hidden md:block image-hover-effect">
              <img src="images/13.png" alt="Group of seniors" className="w-full h-full object-cover"/>
            </div> */}
          </div>
          <div className="animate-on-scroll" style={{ transitionDelay: '100ms' }}>
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">SYDNEY-BASED NDIS AGENCY</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">Who Funds Disability Services through NDIS?</h2>
            <p className="mt-6 text-gray-600 dark:text-gray-300">
              At Care Spree, we provide compassionate and high-quality care to individuals with disabilities and those in need of support. Our team of trained professionals is committed to enhancing the quality of life for our clients by offering personalized services that promote independence, dignity, and well-being.
            </p>
            <ul className="mt-6 space-y-4">
              {points.map((point, index) => (
                <li key={index} className="flex items-center">
                  <div className="bg-green-100 dark:bg-green-900/50 rounded-full p-1 mr-3">
                    <i className="fa fa-check text-green-600 dark:text-green-400"></i>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 bg-pink-50 dark:bg-pink-900/50 border border-pink-200 dark:border-pink-800 rounded-lg p-6 flex items-start space-x-4">
              <i className="fa-solid fa-hands-helping text-pink-500 dark:text-pink-400 text-3xl mt-1"></i>
              <p className="text-gray-700 dark:text-gray-300">If the NDIS is available in your area and you don't receive disability support, you can <a href="#contact-us" className="font-bold text-purple-600 dark:text-purple-400">reach us for assistance.</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundingInfo;