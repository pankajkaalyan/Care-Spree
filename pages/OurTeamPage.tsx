import React from 'react';

const TeamHero = () => (
    <section className="relative bg-purple-800 text-white py-20 md:py-32 bg-cover bg-center" style={{ backgroundImage: "url('./images/team-hero-bg.svg')" }}>
        <div className="absolute inset-0 bg-purple-900 opacity-60"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold">Our Team</h1>
        </div>
    </section>
);

interface TeamMember {
    name: string;
    role: string;
    imageUrl: string;
}

const teamMembers: TeamMember[] = [
    { name: 'Gaganpreet Singh Anand', role: 'Director', imageUrl: './images/team-gaganpreet.svg' },
    { name: 'Archana Anand', role: 'Manager', imageUrl: './images/team-archana-manager.svg' },
    { name: 'Ashish Sachdeva', role: 'Registered Nurse', imageUrl: './images/team-ashish.svg' },
    { name: 'Archana Anand', role: 'Care Team', imageUrl: './images/team-archana-care.svg' },
    { name: 'Jazlin', role: 'Care Team', imageUrl: './images/team-jazlin.svg' },
    { name: 'Hien Do', role: 'Care Team', imageUrl: './images/team-hien.svg' },
    { name: 'Samar', role: 'Care Team', imageUrl: './images/team-samar.svg' },
];

const TeamMemberCard: React.FC<TeamMember> = ({ name, role, imageUrl }) => (
    <div className="rounded-lg shadow-lg overflow-hidden group transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-2xl dark:bg-gray-800">
        <div className="relative image-hover-effect">
             <img src={imageUrl} alt={`Portrait of ${name}`} className="w-full h-auto object-cover" />
             <div className="absolute inset-x-0 bottom-4">
                <div className="w-11/12 mx-auto bg-white dark:bg-gray-700 rounded-lg p-4 shadow-lg flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">{name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
                    </div>
                    <button className="bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md flex-shrink-0 transition-all duration-300 group-hover:bg-purple-700 group-hover:scale-110" aria-label={`Share profile of ${name}`}>
                        <i className="fa-solid fa-share-nodes"></i>
                    </button>
                </div>
             </div>
        </div>
    </div>
);


const OurTeamPage: React.FC = () => {
    return (
        <>
            <TeamHero />
            <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="animate-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
                                <TeamMemberCard {...member} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurTeamPage;