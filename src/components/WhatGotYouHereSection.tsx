import React from 'react';

const WhatGotYouHereSection = () => {
  return (
    <section className="py-6 md:py-8 px-2 md:px-4 bg-stone-100/40">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-4 md:p-6 lg:p-8 shadow-gentle border border-stone-200/50">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-medium text-stone-800 mb-6 md:mb-8 text-center tracking-tight">
            What Got You Here Won't Get You There
          </h2>
          
          <div className="space-y-4 md:space-y-5 text-stone-700">
            <p className="text-base md:text-lg leading-[1.6] text-balance">
              You've paid the price for what you've built—sleepless nights, constant pressure, 
              and a nervous system that <em className="font-medium text-stone-800">never got to land</em>.
            </p>
            
            <p className="text-base md:text-lg leading-[1.6] text-balance">
              For years, it worked. But now the cost is showing up in your body, 
              your energy, your ability to feel.
            </p>
            
            <div className="bg-stone-50/80 rounded-2xl p-4 md:p-6 my-4 md:my-6 border-l-3 border-stone-400">
              <p className="text-base md:text-lg leading-[1.6] text-balance font-medium text-stone-800">
                The very engine that fueled your rise is starting to <strong>burn through you</strong>.
              </p>
            </div>
            
            <p className="text-base md:text-lg leading-[1.6] text-balance">
              This isn't about collapse—it's about <em className="font-medium text-stone-800">recognition</em>. That you've outgrown 
              the strategy that got you here. And something wiser is ready to emerge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatGotYouHereSection;
