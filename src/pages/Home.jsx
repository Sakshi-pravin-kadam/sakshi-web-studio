import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../sections/Hero';
import { TrustStrip } from '../sections/TrustStrip';
import { Services } from '../sections/Services';
import { WhoWeHelp } from '../sections/WhoWeHelp';
import { WhyChooseUs } from '../sections/WhyChooseUs';
import { Portfolio } from '../sections/Portfolio';
import { Process } from '../sections/Process';
import { Pricing } from '../sections/Pricing';
import { CTA } from '../sections/CTA';
import { About } from '../sections/About';
import { Contact } from '../sections/Contact';

export const Home = () => {
  const [selectedPackage, setSelectedPackage] = useState('');
  const location = useLocation();

  // If redirected with a hash (e.g. /#contact), smoothly scroll to that element
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const handleSelectTier = (tierName) => {
    setSelectedPackage(tierName);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      <Hero />
      <TrustStrip />
      <Services />
      <WhoWeHelp />
      <WhyChooseUs />
      <Portfolio />
      <Process />
      <Pricing onSelectTier={handleSelectTier} />
      <CTA />
      <About />
      <Contact prefilledPackage={selectedPackage} />
    </main>
  );
};

export default Home;
