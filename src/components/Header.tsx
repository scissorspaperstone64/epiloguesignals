import React from 'react';
import { Lightbulb } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white text-black py-6 px-4 md:px-8 border-b border-gray-200">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Lightbulb className="h-8 w-8 text-black" />
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Epilogue Economy Signals</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#dashboard" className="text-black hover:text-gray-600 transition-colors">Dashboard</a>
            <a href="#categories" className="text-black hover:text-gray-600 transition-colors">Categories</a>
            <a href="#about" className="text-black hover:text-gray-600 transition-colors">About</a>
          </nav>
        </div>
        <div className="mt-6 max-w-3xl">
          <p className="text-gray-700 text-lg">
            Tracking cultural signals of the Epilogue Economy through a lens of power, possibility, and reframing — not decline or disengagement.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
