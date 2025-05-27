
import React from 'react';

const PrivateSpaceSection = () => {
  return (
    <section className="py-8 md:py-12 px-4 md:px-6 bg-stone-100/40">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-gentle border border-stone-200/50">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-medium text-stone-800 mb-8 md:mb-10 text-center tracking-tight">
            A Private Space for Real Change
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-playfair font-medium text-stone-800 mb-4 tracking-wide border-b border-stone-200 pb-2">
                What This Is
              </h3>
              <div className="space-y-3 text-sm md:text-base text-stone-700">
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1 text-xs">•</span>
                  <span>A return to what matters</span>
                </div>
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1 text-xs">•</span>
                  <span>Permission to <em className="font-medium text-stone-800">stop performing</em></span>
                </div>
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1 text-xs">•</span>
                  <span>Space to breathe and feel</span>
                </div>
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1 text-xs">•</span>
                  <span>An invitation to <strong className="font-semibold text-stone-800">lead from presence</strong></span>
                </div>
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1 text-xs">•</span>
                  <span>A recalibration of how you relate to success</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-playfair font-medium text-stone-800 mb-4 tracking-wide border-b border-stone-200 pb-2">
                What This Isn't
              </h3>
              <div className="space-y-3 text-sm md:text-base text-stone-700">
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1 text-xs">•</span>
                  <span>Another performance upgrade</span>
                </div>
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1 text-xs">•</span>
                  <span>A quick fix or hack</span>
                </div>
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1 text-xs">•</span>
                  <span>Therapy or surface-level coaching</span>
                </div>
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1 text-xs">•</span>
                  <span><em className="font-medium text-stone-800">Available to everyone</em></span>
                </div>
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1 text-xs">•</span>
                  <span>About doing more</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateSpaceSection;
