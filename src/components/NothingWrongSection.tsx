
import React from 'react';

const NothingWrongSection = () => {
  return (
    <section className="py-8 md:py-12 px-4 md:px-6 bg-gradient-to-br from-stone-50 to-stone-100/60">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-soft border border-stone-200/50">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-medium text-stone-800 mb-6 md:mb-8 text-center tracking-tight">
            There's Nothing Wrong With You
          </h2>
          
          <div className="space-y-4 md:space-y-5 text-stone-700">
            <p className="text-base md:text-lg leading-[1.6] text-balance">
              You don't need fixing. You don't need another upgrade or mindset tweak.
            </p>
            
            <p className="text-base md:text-lg leading-[1.6] text-balance">
              You need <strong className="font-semibold text-stone-800">space</strong>—space to breathe, to listen, to feel. You need a way of living 
              that no longer treats your body like an afterthought.
            </p>
            
            <p className="text-base md:text-lg leading-[1.6] text-balance">
              This work is about <em className="font-medium text-stone-800">peeling back the layers</em>—not adding more.
            </p>
            
            <div className="text-center my-5 md:my-7 py-5 md:py-6 bg-gradient-to-r from-stone-50/60 via-stone-100/60 to-stone-50/60 rounded-2xl border border-stone-200/30">
              <p className="text-base md:text-lg leading-[1.6] text-balance font-medium text-stone-800">
                From pressure to <strong className="font-semibold">presence</strong>. From proving to <strong className="font-semibold">being</strong>. 
                <br className="hidden md:block" />
                From chasing life to <em className="font-medium">letting it meet you</em>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NothingWrongSection;
