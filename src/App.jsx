import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ContactModal from './components/ContactModal';
import CompanyOverview from './components/CompanyOverview';
import CoreDivisions from './components/CoreDivisions';
import AboutUs from './components/AboutUs';
import EngagementProcess from './components/EngagementProcess';
import Footer from './components/Footer';

function App() {
  const [showContact, setShowContact] = useState(false);
  
  const openContact = useCallback(() => setShowContact(true), []);
  const closeContact = useCallback(() => setShowContact(false), []);

  useEffect(() => {
    const handler = () => openContact();
    window.addEventListener('openContact', handler);
    
    // Optimize scroll performance
    const handleScroll = () => {
      document.documentElement.style.scrollBehavior = 'smooth';
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('openContact', handler);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [openContact]);

  return (
    <div className="app">
      <Header onOpenContact={openContact} />
      <main>
        <Hero onOpenContact={openContact} />
        <div id="overview"><CompanyOverview /></div>
        <div id="divisions"><CoreDivisions /></div>
        <div id="about-us"><AboutUs /></div>
        <div id="process"><EngagementProcess /></div>
      </main>
      <Footer />
      {/** Contact modal placed at app root */}
      <ContactModal visible={showContact} onClose={closeContact} />
    </div>
  );
}

export default App;
