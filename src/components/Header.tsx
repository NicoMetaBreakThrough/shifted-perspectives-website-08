
import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-stone-50/90 to-stone-50/70 backdrop-blur-md border-b border-stone-200/40">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6">
        <div className="flex items-center justify-center">
          <div className="relative inline-flex items-center justify-center">
            {/* N/O Logo */}
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
              <div className="absolute inset-0 border-2 border-stone-400 rounded-full"></div>
              <span className="text-stone-700 font-playfair font-medium text-base md:text-lg tracking-tight">N</span>
            </div>
            <span className="ml-3 md:ml-4 text-lg md:text-xl font-playfair font-medium text-stone-800 tracking-wide">
              Nico Oosthuizen
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
