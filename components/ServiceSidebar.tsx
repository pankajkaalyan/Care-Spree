
import React from 'react';

const ServiceLink: React.FC<{ title: string, href: string, active?: boolean }> = ({ title, href, active }) => (
    <a href={href} className={`flex justify-between items-center p-4 rounded-lg transition-colors ${active ? 'bg-white dark:bg-gray-800 shadow-md' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
        <span className={`font-semibold ${active ? 'text-purple-700 dark:text-purple-400' : 'text-gray-800 dark:text-gray-300'}`}>{title}</span>
        <i className={`fa fa-arrow-right text-gray-500 ${active ? 'text-purple-700 dark:text-purple-400' : ''}`}></i>
    </a>
);

const HelpCTA = () => (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg mt-8 text-center relative overflow-hidden border dark:border-gray-700">
       <img src="images/a-smiling-person.png" alt="A smiling person" className="w-48 h-auto mx-auto mb-4"/>
       <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Need Any Help From Us</h3>
       <a href="#contact-us" className="mt-4 bg-purple-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-purple-700 transition-colors shadow-md inline-block">
            GET STARTED
       </a>
    </div>
);

export const servicesList = [
    { title: "Personal Care", href: "#personal-care" }, // 0107 Assist-Personal Activities
    { title: "Domestic Help", href: "#domestic-help" }, // 0120 Household Tasks
    { title: "Transportation", href: "#transportation" }, // 0108 Assist-Travel/Transport
    { title: "Meal Preparation", href: "#meal-preparation" },
    { title: "Life Stage, Transition", href: "#assist-life-stage-transition" }, // 0106
    { title: "Daily Tasks/Shared Living", href: "#daily-tasks-shared-living" }, // 0115
    { title: "Innov. Community Participation", href: "#innov-community-participation" }, // 0116
    { title: "Development-Life Skills", href: "#development-life-skills" }, // 0117
    { title: "Participate Community", href: "#participate-community" }, // 0125
    { title: "Group/Centre Activities", href: "#group-centre-activities" }, // 0136
];


const ServiceSidebar: React.FC<{ activeService: string }> = ({ activeService }) => {
    return (
        <aside>
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 shadow-sm space-y-3">
                {servicesList.map((service) => (
                    <ServiceLink key={service.title} title={service.title} href={service.href} active={service.title === activeService} />
                ))}
            </div>
            <HelpCTA />
        </aside>
    );
};

export default ServiceSidebar;