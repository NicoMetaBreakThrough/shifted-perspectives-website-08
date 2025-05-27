
import React from 'react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 pt-20 bg-gradient-to-br from-stone-50 to-stone-100/80">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 md:p-16 shadow-soft border border-stone-200/50">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-medium text-stone-800 mb-8 leading-[0.95] text-balance tracking-tight">
            You've Built Something Impressive.
            <br />
            <span className="text-stone-600">Now What?</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-stone-700 font-light leading-[1.6] max-w-3xl mx-auto text-balance prose-custom">
            The same force that drove your success is now <em>costing more than it gives</em>. 
            This is your invitation—not to do more, but to <strong>become more available to life</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
