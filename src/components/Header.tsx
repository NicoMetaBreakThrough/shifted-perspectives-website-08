
import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-stone-50/95 to-stone-50/85 backdrop-blur-md border-b border-stone-200/40">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-center">
          <div className="relative inline-flex items-center justify-center">
            {/* Enhanced N/O Logo */}
            <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
              <div className="absolute inset-0 border-[1.5px] border-stone-500 rounded-full"></div>
              <span className="text-stone-700 font-playfair font-medium text-sm md:text-base tracking-tight">N</span>
            </div>
            <span className="ml-2 md:ml-3 text-base md:text-lg font-playfair font-medium text-stone-800 tracking-wide">
              Nico Oosthuizen
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
