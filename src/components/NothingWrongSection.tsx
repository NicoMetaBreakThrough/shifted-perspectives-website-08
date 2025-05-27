
import React from 'react';

const NothingWrongSection = () => {
  return (
    <section className="py-40 px-8 bg-gradient-to-br from-stone-50 to-stone-100/60">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-16 shadow-soft border border-stone-200/50">
          <h2 className="text-5xl md:text-6xl font-playfair font-medium text-stone-800 mb-20 text-center tracking-tight">
            There's Nothing Wrong With You
          </h2>
          
          <div className="prose prose-2xl max-w-none text-stone-700 prose-custom space-y-10">
            <p className="text-2xl leading-relaxed text-balance">
              You don't need fixing. You don't need another upgrade or mindset tweak.
            </p>
            
            <p className="text-2xl leading-relaxed text-balance">
              You need space—space to breathe, to listen, to feel. You need a way of living 
              that no longer treats your body like an afterthought.
            </p>
            
            <p className="text-2xl leading-relaxed text-balance">
              This work is about peeling back the layers—not adding more.
            </p>
            
            <p className="text-2xl leading-relaxed text-balance font-medium text-stone-800">
              From pressure to presence. From proving to being. From chasing life to letting it meet you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NothingWrongSection;
