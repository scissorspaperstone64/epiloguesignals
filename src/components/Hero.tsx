import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-white text-black py-16 md:py-24">
      <div className="container mx-auto max-w-4xl text-center px-4 md:px-8">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Tracking the Future of Aging and Work
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          The Epilogue Economy represents a powerful shift in how we view aging, work, and economic contribution.
        </p>
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Our signals dashboard tracks emerging trends that highlight opportunity and innovation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
            Explore Signals
          </button>
          <button className="px-6 py-3 border border-black text-black rounded-md hover:bg-gray-100 transition-colors">
            About the Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
