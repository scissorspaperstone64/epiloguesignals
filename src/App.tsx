import React from 'react';
import Header from './components/Header';
import Masthead from './components/Masthead';
import Hero from './components/Hero';
import CulturalProvocation from './components/CulturalProvocation';
import EmergingVibeSignals from './components/EmergingVibeSignals';
import SuggestedPostPrompt from './components/SuggestedPostPrompt';
import Dashboard from './components/Dashboard';
import CategoryInsights from './components/CategoryInsights';
import Footer from './components/Footer';
import { categories } from './data/categories';
import { vibeSignals } from './data/vibeSignals';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Masthead />
      <Hero />
      <CulturalProvocation />
      <EmergingVibeSignals signals={vibeSignals} />
      <SuggestedPostPrompt />
      <Dashboard />
      <CategoryInsights categories={categories} />
      <Footer />
    </div>
  );
}

export default App;
