import React from 'react';
import { Category } from '../types';
import { TrendingUp, Users, Lightbulb } from 'lucide-react';

interface CategoryInsightsProps {
  categories: Category[];
}

const CategoryInsights: React.FC<CategoryInsightsProps> = ({ categories }) => {
  return (
    <section id="categories" className="py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-black">Category Insights</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Explore key insights across different categories of the Epilogue Economy. 
            Each category represents a distinct area where we're tracking signals of change.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.name} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center mb-4">
                {category.name.includes('AI') ? (
                  <Lightbulb className="h-6 w-6 text-black mr-2" />
                ) : category.name.includes('Workforce') || category.name.includes('Career') ? (
                  <Users className="h-6 w-6 text-black mr-2" />
                ) : (
                  <TrendingUp className="h-6 w-6 text-black mr-2" />
                )}
                <h3 className="text-xl font-bold text-black">{category.name}</h3>
              </div>
              
              <p className="text-gray-700 mb-4">{category.description}</p>
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">
                  {Math.floor(Math.random() * 10) + 5} signals tracked
                </span>
                <a href="#" className="text-black hover:text-gray-600 transition-colors font-medium">
                  View all
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryInsights;
