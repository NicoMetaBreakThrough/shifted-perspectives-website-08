
import React from 'react';

const FooterSection = () => {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8 bg-gradient-to-br from-stone-100/60 to-stone-50">
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-soft border border-stone-200/50">
          <div className="w-16 h-px bg-stone-300 mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg md:text-xl text-stone-700 italic font-light leading-[1.7] text-balance prose-custom">
            This work is by <strong>invitation and referral only</strong>. Those ready for this conversation 
            will find their way here through the right people at the right time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
