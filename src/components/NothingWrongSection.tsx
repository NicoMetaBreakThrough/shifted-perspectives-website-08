
import React from 'react';

const NothingWrongSection = () => {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8 bg-gradient-to-br from-stone-50 to-stone-100/60">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 lg:p-16 shadow-soft border border-stone-200/50">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-medium text-stone-800 mb-8 md:mb-10 text-center tracking-tight">
            There's Nothing Wrong With You
          </h2>
          
          <div className="prose prose-xl max-w-none text-stone-700 prose-custom space-y-4 md:space-y-5">
            <p className="text-lg md:text-xl leading-[1.7] text-balance">
              You don't need fixing. You don't need another upgrade or mindset tweak.
            </p>
            
            <p className="text-lg md:text-xl leading-[1.7] text-balance">
              You need <strong>space</strong>—space to breathe, to listen, to feel. You need a way of living 
              that no longer treats your body like an afterthought.
            </p>
            
            <p className="text-lg md:text-xl leading-[1.7] text-balance">
              This work is about <em>peeling back the layers</em>—not adding more.
            </p>
            
            <div className="text-center my-6 md:my-8 py-4 md:py-6 bg-stone-50/60 rounded-2xl">
              <p className="text-lg md:text-xl leading-[1.7] text-balance font-medium text-stone-800">
                From pressure to <strong>presence</strong>. From proving to <strong>being</strong>. 
                From chasing life to <em>letting it meet you</em>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NothingWrongSection;
