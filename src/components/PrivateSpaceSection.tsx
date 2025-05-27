
import React from 'react';

const PrivateSpaceSection = () => {
  return (
    <section className="py-40 px-8 bg-stone-100/40">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-16 shadow-gentle border border-stone-200/50">
          <h2 className="text-5xl md:text-6xl font-playfair font-medium text-stone-800 mb-24 text-center tracking-tight">
            A Private Space for Real Change
          </h2>
          
          <div className="grid md:grid-cols-2 gap-20">
            <div className="space-y-8">
              <h3 className="text-3xl font-playfair font-medium text-stone-800 mb-12 tracking-wide">
                What This Is
              </h3>
              <ul className="space-y-6 text-xl text-stone-700 prose-custom">
                <li className="flex items-start">
                  <span className="text-stone-400 mr-4 mt-2">•</span>
                  <span>A return to what matters</span>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-400 mr-4 mt-2">•</span>
                  <span>Permission to stop performing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-400 mr-4 mt-2">•</span>
                  <span>Space to breathe and feel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-400 mr-4 mt-2">•</span>
                  <span>An invitation to lead from presence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-400 mr-4 mt-2">•</span>
                  <span>A recalibration of how you relate to success</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-8">
              <h3 className="text-3xl font-playfair font-medium text-stone-800 mb-12 tracking-wide">
                What This Isn't
              </h3>
              <ul className="space-y-6 text-xl text-stone-700 prose-custom">
                <li className="flex items-start">
                  <span className="text-stone-400 mr-4 mt-2">•</span>
                  <span>Another performance upgrade</span>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-400 mr-4 mt-2">•</span>
                  <span>A quick fix or hack</span>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-400 mr-4 mt-2">•</span>
                  <span>Therapy or surface-level coaching</span>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-400 mr-4 mt-2">•</span>
                  <span>Available to everyone</span>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-400 mr-4 mt-2">•</span>
                  <span>About doing more</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateSpaceSection;
