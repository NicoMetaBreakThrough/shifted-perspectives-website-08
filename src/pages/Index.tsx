
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WhatGotYouHereSection from '../components/WhatGotYouHereSection';
import NothingWrongSection from '../components/NothingWrongSection';
import PrivateSpaceSection from '../components/PrivateSpaceSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <WhatGotYouHereSection />
      <NothingWrongSection />
      <PrivateSpaceSection />
    </div>
  );
};

export default Index;
