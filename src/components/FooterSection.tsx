
import React from 'react';

const FooterSection = () => {
  return (
    <section className="py-32 px-8 bg-gradient-to-br from-stone-100/60 to-stone-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-16 shadow-soft border border-stone-200/50">
          <p className="text-2xl text-stone-700 italic font-light leading-relaxed text-balance prose-custom">
            This work is by invitation and referral only. Those ready for this conversation 
            will find their way here through the right people at the right time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
