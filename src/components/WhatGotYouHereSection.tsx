
import React from 'react';

const WhatGotYouHereSection = () => {
  return (
    <section className="py-24 px-8 bg-stone-100/40">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-12 md:p-16 shadow-gentle border border-stone-200/50">
          <h2 className="text-4xl md:text-5xl font-playfair font-medium text-stone-800 mb-12 text-center tracking-tight">
            What Got You Here Won't Get You There
          </h2>
          
          <div className="prose prose-xl max-w-none text-stone-700 prose-custom space-y-6">
            <p className="text-xl leading-[1.7] text-balance">
              You've paid the price for what you've built—sleepless nights, constant pressure, 
              and a nervous system that <em>never got to land</em>.
            </p>
            
            <p className="text-xl leading-[1.7] text-balance">
              For years, it worked. But now the cost is showing up in your body, 
              your energy, your ability to feel.
            </p>
            
            <div className="border-l-2 border-stone-300 pl-6 my-8">
              <p className="text-xl leading-[1.7] text-balance font-medium text-stone-800">
                The very engine that fueled your rise is starting to <strong>burn through you</strong>.
              </p>
            </div>
            
            <p className="text-xl leading-[1.7] text-balance">
              This isn't about collapse—it's about <em>recognition</em>. That you've outgrown 
              the strategy that got you here. And something wiser is ready to emerge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatGotYouHereSection;
