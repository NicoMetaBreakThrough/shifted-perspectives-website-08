
import React from 'react';

const WhatGotYouHereSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-playfair font-medium text-gray-900 mb-16 text-center">
          What Got You Here Won't Get You There
        </h2>
        
        <div className="prose prose-xl max-w-none text-gray-700">
          <p className="text-xl leading-relaxed mb-8 text-balance">
            You learned early that success required sacrifice. Sleep, relationships, 
            presence—all traded for the next milestone, the next achievement, the next validation.
          </p>
          
          <p className="text-xl leading-relaxed mb-8 text-balance">
            Those patterns served you. They built empires, launched companies, 
            and earned respect. But somewhere along the way, the engine that powered 
            your rise began consuming the very life you were trying to build.
          </p>
          
          <p className="text-xl leading-relaxed text-balance">
            The cost isn't always visible at first. It shows up as a persistent emptiness, 
            a disconnection from what once mattered, a sense that you're succeeding 
            at the wrong game entirely.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatGotYouHereSection;
