
import React from 'react';

const NothingWrongSection = () => {
  return (
    <section className="py-32 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-playfair font-medium text-gray-900 mb-16 text-center">
          There's Nothing Wrong With You
        </h2>
        
        <div className="prose prose-xl max-w-none text-gray-700">
          <p className="text-xl leading-relaxed mb-8 text-balance">
            You don't need fixing. You don't need another productivity system 
            or optimization hack. What you need is permission to stop proving 
            yourself and start being yourself.
          </p>
          
          <p className="text-xl leading-relaxed mb-8 text-balance">
            This work isn't about adding more to your life. It's about removing 
            the layers of conditioning that have you performing your life instead of living it.
          </p>
          
          <p className="text-xl leading-relaxed text-balance">
            The shift is subtle but profound: from pressure to presence, 
            from proving to being, from accomplishing to aliveness.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NothingWrongSection;
