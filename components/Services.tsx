import React from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, imageUrl, href }) => (
  <div className="text-center p-6 flex flex-col items-center h-full">
    <div className="relative w-36 h-36 mb-6 rounded-full shadow-lg image-hover-effect">
      <img src={imageUrl} alt={title} className="rounded-full w-full h-full object-cover" />
      <div className="absolute -top-2 -right-2 bg-white dark:bg-gray-700 p-3 rounded-full shadow-md border border-gray-200 dark:border-gray-600 z-10">
        <i className={`${icon} text-2xl text-blue-500 dark:text-blue-400`}></i>
      </div>
    </div>
    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
    <p className="mt-2 text-gray-600 dark:text-gray-400 flex-grow">{description}</p>
    <a href={href} className="mt-4 text-purple-600 dark:text-purple-400 font-semibold">
      <i className="fa fa-arrow-right"></i>
    </a>
  </div>
);

const Services: React.FC = () => {
  const allServices = [
    { 
      icon: 'fa-solid fa-hand-holding-heart', 
      title: 'Personal Care', 
      description: 'Assistance with, or supervision of, personal tasks of daily life.', 
      imageUrl: 'images/services/personal-care.png',
      href: '#personal-care'
    },
    { 
      icon: 'fa-solid fa-broom', 
      title: 'Domestic Help', 
      description: 'images/services/personal-care.png',
      href: '#domestic-help'
    },
    { 
      icon: 'fa-solid fa-car', 
      title: 'Transportation', 
      description: 'Travel and transportation assistance with special equipment.', 
      imageUrl: './images/service-transportation.svg',
      href: '#transportation'
    },
    { 
      icon: 'fa-solid fa-utensils', 
      title: 'Meal Preparation', 
      description: 'Assistance with meal preparation and delivery.', 
      imageUrl: './images/service-meal-prep.svg',
      href: '#meal-preparation'
    },
    { 
      icon: 'fa-solid fa-people-arrows', 
      title: 'Life Stage, Transition', 
      description: 'Support during major life changes like starting school or a new job.', 
      imageUrl: './images/service-life-stage.svg', 
      href: '#assist-life-stage-transition'
    },
    { 
      icon: 'fa-solid fa-house-user', 
      title: 'Daily Tasks/Shared Living', 
      description: 'Assistance with daily routines in a shared living environment.', 
      imageUrl: './images/service-daily-tasks.svg',
      href: '#daily-tasks-shared-living'
    },
    { 
      icon: 'fa-solid fa-lightbulb', 
      title: 'Innov. Community Participation', 
      description: 'Creative ways to engage with the community based on your interests.', 
      imageUrl: './images/service-innov-community.svg',
      href: '#innov-community-participation'
    },
    { 
      icon: 'fa-solid fa-brain', 
      title: 'Development-Life Skills', 
      description: 'Training to increase your skills for independence and daily life.', 
      imageUrl: './images/service-dev-life-skills.svg',
      href: '#development-life-skills'
    },
    { 
      icon: 'fa-solid fa-users', 
      title: 'Participate Community', 
      description: 'Support to join social, recreational, and community activities.', 
      imageUrl: './images/service-participate-community.svg',
      href: '#participate-community'
    },
    { 
      icon: 'fa-solid fa-puzzle-piece', 
      title: 'Group/Centre Activities', 
      description: 'Engaging group programs to socialize, learn, and have fun.', 
      imageUrl: './images/service-group-activities.svg',
      href: '#group-centre-activities'
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-16 sm:py-24">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-on-scroll">
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">SERVICE WE PROVIDE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">Our Disability Support Services</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {allServices.map((service, index) => (
            <div key={service.title} className="animate-on-scroll h-full" style={{ transitionDelay: `${index * 50}ms` }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;