
import React from 'react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-2 md:px-4 pt-16 md:pt-20 pb-4 md:pb-6 bg-gradient-to-br from-stone-50 to-stone-100/80">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-4 md:p-6 lg:p-8 shadow-soft border border-stone-200/50">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-playfair font-medium text-stone-800 mb-4 md:mb-6 leading-[0.9] text-balance tracking-tight">
            You've Built Something Impressive.
            <br />
            <span className="text-stone-600 text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Now What?</span>
          </h1>
          
          <div className="w-12 h-px bg-stone-300 mx-auto my-4 md:my-6"></div>
          
          <p className="text-base md:text-lg lg:text-xl text-stone-700 font-light leading-[1.5] max-w-2xl mx-auto text-balance">
            The same force that drove your success is now <em className="font-medium">costing more than it gives</em>. 
            This is your invitation—not to do more, but to <strong className="font-medium text-stone-800">become more available to life</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
