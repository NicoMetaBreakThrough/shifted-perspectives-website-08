
import React from 'react';

const WhatGotYouHereSection = () => {
  return (
    <section className="py-40 px-8 bg-stone-100/40">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-16 shadow-gentle border border-stone-200/50">
          <h2 className="text-5xl md:text-6xl font-playfair font-medium text-stone-800 mb-20 text-center tracking-tight">
            What Got You Here Won't Get You There
          </h2>
          
          <div className="prose prose-2xl max-w-none text-stone-700 prose-custom space-y-10">
            <p className="text-2xl leading-relaxed text-balance">
              You've paid the price for what you've built—sleepless nights, constant pressure, 
              and a nervous system that never got to land.
            </p>
            
            <p className="text-2xl leading-relaxed text-balance">
              For years, it worked. But now the cost is showing up in your body, 
              your energy, your ability to feel.
            </p>
            
            <p className="text-2xl leading-relaxed text-balance font-medium text-stone-800">
              The very engine that fueled your rise is starting to burn through you.
            </p>
            
            <p className="text-2xl leading-relaxed text-balance">
              This isn't about collapse—it's about recognition. That you've outgrown 
              the strategy that got you here. And something wiser is ready to emerge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatGotYouHereSection;
