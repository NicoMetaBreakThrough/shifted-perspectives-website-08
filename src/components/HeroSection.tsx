
import React from 'react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-playfair font-medium text-gray-900 mb-8 leading-tight text-balance">
          You've Built Something Impressive.
          <br />
          <span className="text-gray-600">Now What?</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto text-balance">
          The same force that drove your success is now quietly burning you out. 
          This is your invitation to live differently.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
