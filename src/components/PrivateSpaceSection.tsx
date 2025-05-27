
import React from 'react';

const PrivateSpaceSection = () => {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8 bg-stone-100/40">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 lg:p-16 shadow-gentle border border-stone-200/50">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-medium text-stone-800 mb-10 md:mb-12 text-center tracking-tight">
            A Private Space for Real Change
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-4 md:space-y-5">
              <h3 className="text-xl md:text-2xl font-playfair font-medium text-stone-800 mb-4 md:mb-6 tracking-wide">
                What This Is
              </h3>
              <div className="space-y-3 text-base md:text-lg text-stone-700 prose-custom">
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1">•</span>
                  <span>A return to what matters</span>
                </div>
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1">•</span>
                  <span>Permission to <em>stop performing</em></span>
                </div>
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1">•</span>
                  <span>Space to breathe and feel</span>
                </div>
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1">•</span>
                  <span>An invitation to <strong>lead from presence</strong></span>
                </div>
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1">•</span>
                  <span>A recalibration of how you relate to success</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 md:space-y-5">
              <h3 className="text-xl md:text-2xl font-playfair font-medium text-stone-800 mb-4 md:mb-6 tracking-wide">
                What This Isn't
              </h3>
              <div className="space-y-3 text-base md:text-lg text-stone-700 prose-custom">
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1">•</span>
                  <span>Another performance upgrade</span>
                </div>
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1">•</span>
                  <span>A quick fix or hack</span>
                </div>
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1">•</span>
                  <span>Therapy or surface-level coaching</span>
                </div>
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1">•</span>
                  <span><em>Available to everyone</em></span>
                </div>
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1">•</span>
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
