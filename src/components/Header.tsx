import React from 'react';
import { Swords } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center space-x-3">
          <Swords className="w-8 h-8" />
          <h1 className="text-3xl font-bold">Dragon Ball Universe</h1>
        </div>
        <p className="text-center mt-2 text-orange-100">
          Explore the legendary warriors of Dragon Ball
        </p>
      </div>
    </header>
  );
};

export default Header;