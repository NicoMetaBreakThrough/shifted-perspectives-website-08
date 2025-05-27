
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WhatGotYouHereSection from '../components/WhatGotYouHereSection';
import NothingWrongSection from '../components/NothingWrongSection';
import PrivateSpaceSection from '../components/PrivateSpaceSection';
import FooterSection from '../components/FooterSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WhatGotYouHereSection />
      <NothingWrongSection />
      <PrivateSpaceSection />
      <FooterSection />
    </div>
  );
};

export default Index;
