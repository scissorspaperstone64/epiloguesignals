import React, { useState } from 'react';
import { signals } from '../data/signals';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import ImpactFilter from './ImpactFilter';
import SignalGrid from './SignalGrid';

const Dashboard: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedImpact, setSelectedImpact] = useState<string | null>(null);
  
  const filteredSignals = signals.filter(signal => {
    // Filter by search query
    const matchesSearch = 
      searchQuery === '' || 
      signal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      signal.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by category
    const matchesCategory = 
      selectedCategory === null || 
      signal.category === selectedCategory;
    
    // Filter by impact
    const matchesImpact = 
      selectedImpact === null || 
      signal.impact === selectedImpact;
    
    return matchesSearch && matchesCategory && matchesImpact;
  });
  
  return (
    <section id="dashboard" className="py-12 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-black">Signals Dashboard</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Explore the latest signals indicating shifts in how we view aging, work, and economic contribution. 
            Filter by category, impact level, or search for specific topics.
          </p>
        </div>
        
        <div className="mb-8">
          <SearchBar 
            searchQuery={searchQuery} 
            onSearchChange={setSearchQuery} 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CategoryFilter 
              selectedCategory={selectedCategory} 
              onCategoryChange={setSelectedCategory} 
            />
            
            <ImpactFilter 
              selectedImpact={selectedImpact} 
              onImpactChange={setSelectedImpact} 
            />
          </div>
        </div>
        
        <SignalGrid signals={filteredSignals} />
      </div>
    </section>
  );
};

export default Dashboard;
