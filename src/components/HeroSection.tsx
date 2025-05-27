
import React from 'react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 pt-24 bg-gradient-to-br from-stone-50 to-stone-100/80">
      <div className="max-w-5xl mx-auto text-center">
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-16 shadow-soft border border-stone-200/50">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-playfair font-medium text-stone-800 mb-12 leading-[0.95] text-balance tracking-tight">
            You've Built Something Impressive.
            <br />
            <span className="text-stone-600">Now What?</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-stone-700 font-light leading-relaxed max-w-4xl mx-auto text-balance prose-custom">
            The same force that drove your success is now costing more than it gives. 
            This is your invitation—not to do more, but to become more available to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
