import React from 'react';

interface ImpactFilterProps {
  selectedImpact: string | null;
  onImpactChange: (impact: string | null) => void;
}

const ImpactFilter: React.FC<ImpactFilterProps> = ({ selectedImpact, onImpactChange }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3 text-black">Filter by Impact</h3>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onImpactChange(null)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
            selectedImpact === null
              ? 'bg-black text-white'
              : 'bg-white text-black border border-gray-300 hover:bg-gray-100'
          }`}
        >
          All Impacts
        </button>
        
        {['high', 'medium', 'low'].map((impact) => (
          <button
            key={impact}
            onClick={() => onImpactChange(impact)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              selectedImpact === impact
                ? 'bg-black text-white'
                : 'bg-white text-black border border-gray-300 hover:bg-gray-100'
            }`}
          >
            {impact.charAt(0).toUpperCase() + impact.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImpactFilter;
