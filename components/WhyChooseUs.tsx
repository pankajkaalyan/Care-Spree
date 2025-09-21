import React from 'react';

interface ChoiceItemProps {
  number: string;
  title: string;
  description: string;
}

const ChoiceItem: React.FC<ChoiceItemProps> = ({ number, title, description }) => (
  <div className="flex items-start space-x-6 relative">
    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-full text-xl font-bold text-gray-800 dark:text-gray-200">
      {number}
    </div>
    <div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  </div>
);

const WhyChooseUs: React.FC = () => {
  const choices = [
    { number: '01', title: 'Experienced Staff', description: 'Be confident in the support and services provided, as well as the abilities of our staff.' },
    { number: '02', title: 'The right people', description: 'Get the tailored support and services you deserve.' },
    { number: '03', title: 'Preferred care', description: 'We\'re committed to delivering quality-driven, choice-conscious support services.' },
    { number: '04', title: 'Your preferred Partner', description: 'We ensure high-quality services in a comprehensive and welcoming environment.' },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white animate-on-scroll">Why Choose Care Spree?</h2>
            <div className="mt-10 space-y-10 relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 hidden sm:block"></div>
              {choices.map((choice, index) => (
                <div key={choice.number} className="animate-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
                  <ChoiceItem {...choice} />
                </div>
              ))}
            </div>
          </div>
          <div className="animate-on-scroll" style={{ transitionDelay: '200ms' }}>
            <div className="rounded-lg shadow-lg image-hover-effect">
              <img src="./images/why-choose-us.svg" alt="Team meeting with clients" className="w-full h-auto object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;