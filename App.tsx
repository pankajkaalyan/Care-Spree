
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import FundingInfo from './components/FundingInfo';
import WhyChooseUs from './components/WhyChooseUs';
import HowWeHelp from './components/HowWeHelp';
import CallToAction from './components/CallToAction';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';
import OurTeamPage from './pages/OurTeamPage';
import AboutUsPage from './pages/AboutUsPage';
import PersonalCarePage from './pages/PersonalCarePage';
import MealPrepPage from './pages/MealPrepPage';
import DomesticHelpPage from './pages/DomesticHelpPage';
import TransportationPage from './pages/TransportationPage';
import ReferralPage from './pages/ReferralPage';
import AppointmentPage from './pages/AppointmentPage';
import AssistLifeStagePage from './pages/AssistLifeStagePage';
import DailyTasksSharedLivingPage from './pages/DailyTasksSharedLivingPage';
import InnovCommunityParticipationPage from './pages/InnovCommunityParticipationPage';
import DevelopmentLifeSkillsPage from './pages/DevelopmentLifeSkillsPage';
import ParticipateCommunityPage from './pages/ParticipateCommunityPage';
import GroupCentreActivitiesPage from './pages/GroupCentreActivitiesPage';
import NdisCalculatorPage from './pages/NdisCalculatorPage';
import BlogPage from './pages/BlogPage';
import QualitySafetyPage from './pages/QualitySafetyPage';
import { ThemeProvider } from './contexts/ThemeContext';

const HomePage: React.FC = () => (
  <>
    <Hero />
    <Stats />
    <Services />
    <FundingInfo />
    <WhyChooseUs />
    <HowWeHelp />
    <CallToAction />
  </>
);

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
      window.scrollTo(0, 0); // Scroll to top on page change
    };

    window.addEventListener('hashchange', handleHashChange);
    // Set initial route
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [route]);

  const renderPage = () => {
    switch (route) {
      case '#contact-us':
        return <ContactPage />;
      case '#faqs':
        return <FaqPage />;
      case '#our-team':
        return <OurTeamPage />;
      case '#about-us':
        return <AboutUsPage />;
      case '#personal-care':
        return <PersonalCarePage />;
      case '#meal-preparation':
        return <MealPrepPage />;
      case '#domestic-help':
        return <DomesticHelpPage />;
      case '#transportation':
        return <TransportationPage />;
      case '#referral':
        return <ReferralPage />;
      case '#appointment':
        return <AppointmentPage />;
      case '#assist-life-stage-transition':
        return <AssistLifeStagePage />;
      case '#daily-tasks-shared-living':
        return <DailyTasksSharedLivingPage />;
      case '#innov-community-participation':
        return <InnovCommunityParticipationPage />;
      case '#development-life-skills':
        return <DevelopmentLifeSkillsPage />;
      case '#participate-community':
        return <ParticipateCommunityPage />;
      case '#group-centre-activities':
        return <GroupCentreActivitiesPage />;
      case '#ndis-calculator':
        return <NdisCalculatorPage />;
      case '#blog':
        return <BlogPage />;
      case '#quality-safety':
        return <QualitySafetyPage />;
      case '#home':
      case '#':
      case '':
      default:
        return <HomePage />;
    }
  };

  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-900 font-sans text-gray-800 dark:text-gray-200">
        <Header />
        <main>{renderPage()}</main>
        <Testimonials />
        <Footer />
        <FloatingButtons />
      </div>
    </ThemeProvider>
  );
};

export default App;