
import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-stone-50/90 to-stone-50/70 backdrop-blur-md border-b border-stone-200/40">
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="text-2xl font-playfair font-medium text-stone-800 tracking-wide">
          Nico Oosthuizen
        </div>
      </div>
    </header>
  );
};

export default Header;
