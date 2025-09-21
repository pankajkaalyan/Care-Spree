

import React, { useState, useEffect } from 'react';

const CalculatorHero = () => (
    <section className="relative bg-purple-800 text-white py-20 md:py-32 bg-cover bg-center" style={{ backgroundImage: "url('./images/calculator-hero-bg.svg')" }}>
        <div className="absolute inset-0 bg-purple-900 opacity-60"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold">NDIS Funding Calculator</h1>
        </div>
    </section>
);

interface ServiceRowProps {
    name: string;
    hours: number;
    setHours: (hours: number) => void;
    rate: number;
    icon: string;
}

const ServiceRow: React.FC<ServiceRowProps> = ({ name, hours, setHours, rate, icon }) => (
    <div className="py-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-2">
            <div className="flex items-center space-x-3">
                 <i className={`fa-solid ${icon} text-purple-600 dark:text-purple-400 text-xl`}></i>
                <label className="font-semibold text-gray-800 dark:text-gray-200">{name}</label>
            </div>
            <div className="bg-purple-100 text-purple-800 dark:bg-purple-800/50 dark:text-purple-300 font-bold text-lg rounded-md px-3 py-1">
                {hours} hrs/week
            </div>
        </div>
        <input
            type="range"
            min="0"
            max="40"
            step="1"
            value={hours}
            onChange={(e) => setHours(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer accent-purple-600"
            aria-label={`${name} hours per week`}
        />
    </div>
);

const NdisCalculator = () => {
    const serviceRates = {
        personalCare: 65,
        domesticHelp: 55,
        transportation: 50,
        mealPreparation: 55,
        communityParticipation: 65,
        lifeSkills: 70,
    };

    const [hours, setHours] = useState({
        personalCare: 0,
        domesticHelp: 0,
        transportation: 0,
        mealPreparation: 0,
        communityParticipation: 0,
        lifeSkills: 0,
    });

    const [weeklyTotal, setWeeklyTotal] = useState(0);
    const [annualTotal, setAnnualTotal] = useState(0);

    useEffect(() => {
        const weekly = 
            hours.personalCare * serviceRates.personalCare +
            hours.domesticHelp * serviceRates.domesticHelp +
            hours.transportation * serviceRates.transportation +
            hours.mealPreparation * serviceRates.mealPreparation +
            hours.communityParticipation * serviceRates.communityParticipation +
            hours.lifeSkills * serviceRates.lifeSkills;
        
        setWeeklyTotal(weekly);
        setAnnualTotal(weekly * 52);
    }, [hours, serviceRates]);

    return (
        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-3 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 animate-on-scroll">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Estimate Your NDIS Funding</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2 mb-6">Adjust the sliders to estimate the weekly hours you might need for each service.</p>
                
                <ServiceRow name="Personal Care" icon="fa-hand-holding-heart" hours={hours.personalCare} setHours={(h) => setHours(prev => ({...prev, personalCare: h}))} rate={serviceRates.personalCare} />
                <ServiceRow name="Domestic Help" icon="fa-broom" hours={hours.domesticHelp} setHours={(h) => setHours(prev => ({...prev, domesticHelp: h}))} rate={serviceRates.domesticHelp} />
                <ServiceRow name="Transportation" icon="fa-car" hours={hours.transportation} setHours={(h) => setHours(prev => ({...prev, transportation: h}))} rate={serviceRates.transportation} />
                <ServiceRow name="Meal Preparation" icon="fa-utensils" hours={hours.mealPreparation} setHours={(h) => setHours(prev => ({...prev, mealPreparation: h}))} rate={serviceRates.mealPreparation} />
                <ServiceRow name="Community Participation" icon="fa-users" hours={hours.communityParticipation} setHours={(h) => setHours(prev => ({...prev, communityParticipation: h}))} rate={serviceRates.communityParticipation} />
                <ServiceRow name="Life Skills Development" icon="fa-brain" hours={hours.lifeSkills} setHours={(h) => setHours(prev => ({...prev, lifeSkills: h}))} rate={serviceRates.lifeSkills} />
            </div>

            <div className="lg:col-span-2 animate-on-scroll" style={{ transitionDelay: '100ms' }}>
                <div className="bg-gradient-to-br from-purple-700 to-blue-800 text-white rounded-xl shadow-2xl p-8 sticky top-28">
                     <h3 className="text-2xl font-bold text-center">Your Estimated Costs</h3>
                    <div className="mt-6 text-center">
                        <p className="text-lg opacity-80">ESTIMATED WEEKLY TOTAL</p>
                        <p className="text-5xl font-bold my-2">${weeklyTotal.toLocaleString()}</p>
                    </div>
                     <div className="mt-6 text-center">
                        <p className="text-lg opacity-80">ESTIMATED ANNUAL TOTAL</p>
                        <p className="text-4xl font-bold my-2">${annualTotal.toLocaleString()}</p>
                    </div>
                    <div className="mt-8 bg-white/10 p-4 rounded-lg text-center">
                        <p className="text-sm">
                            <i className="fa-solid fa-circle-info mr-2"></i>
                            This is an estimate only and does not constitute a formal quote. Rates are based on standard NDIS pricing guidelines and may vary.
                        </p>
                    </div>
                    <div className="mt-8 text-center">
                         <a href="#appointment" className="bg-white text-purple-700 px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors shadow-lg w-full inline-block">
                            Book a Personalised Consultation
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const NdisCalculatorPage: React.FC = () => {
    return (
        <>
            <CalculatorHero />
            <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-6">
                    <NdisCalculator />
                </div>
            </section>
        </>
    );
};

export default NdisCalculatorPage;