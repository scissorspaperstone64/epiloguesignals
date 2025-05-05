import React from 'react';

const CulturalProvocation: React.FC = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-3">
            <span className="text-sm uppercase tracking-wider text-gray-400">Cultural Provocation of the Day</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            "The most innovative minds aren't the youngest in the room — they're the ones who've lived enough to recognize patterns, challenge assumptions, and reimagine what's possible."
          </h2>
          <div className="mt-6 flex items-center">
            <div className="h-px bg-gray-700 flex-grow mr-4"></div>
            <span className="text-gray-400 italic">The Epilogue Economy</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturalProvocation;
