import React from 'react';

const FooterSection = () => {
  return (
    <section className="py-6 md:py-8 px-2 md:px-4 bg-gradient-to-br from-stone-100/60 to-stone-50">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 md:p-6 lg:p-8 shadow-soft border border-stone-200/50">
          <div className="w-12 h-px bg-stone-300 mx-auto mb-5 md:mb-6"></div>
          <p className="text-base md:text-lg text-stone-700 font-light leading-[1.6] text-balance">
            This work is by <strong className="font-semibold text-stone-800">invitation and referral only</strong>. Those ready for this conversation 
            will find their way here through the right people at the right time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
