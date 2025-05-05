import React, { useState, useEffect } from 'react';
import { Signal } from '../types';
import { ExternalLink, TrendingUp, Clock, Search } from 'lucide-react';
import { categories } from '../data/categories';
import { validateUrl, createSearchUrl } from '../utils/urlValidator';

interface SignalCardProps {
  signal: Signal;
}

const SignalCard: React.FC<SignalCardProps> = ({ signal }) => {
  const [urlState, setUrlState] = useState<{
    isValidated: boolean;
    isValid: boolean;
    url: string;
    searchFallback?: string;
  }>({
    isValidated: false,
    isValid: false,
    url: signal.url
  });

  useEffect(() => {
    const checkUrl = async () => {
      const result = await validateUrl(signal.url);
      setUrlState({
        isValidated: true,
        isValid: result.isValid,
        url: result.isValid ? result.validatedUrl : createSearchUrl(result.searchFallback || ''),
        searchFallback: result.searchFallback
      });
    };

    checkUrl();
  }, [signal.url]);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={signal.imageUrl} 
          alt={signal.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 right-0 bg-black text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
          {signal.category}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <div className="flex items-center text-white text-sm">
            <Clock className="w-4 h-4 mr-1" />
            <span>{signal.date}</span>
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-black">{signal.title}</h3>
        <p className="text-gray-700 mb-4">{signal.description}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <TrendingUp className={`w-5 h-5 mr-1 ${
              signal.impact === 'high' ? 'text-black' : 
              signal.impact === 'medium' ? 'text-gray-600' : 'text-gray-400'
            }`} />
            <span className="text-sm font-medium capitalize">{signal.impact} Impact</span>
          </div>
          
          <div className="text-sm text-gray-500">
            Source: {signal.source}
          </div>
        </div>
        
        {urlState.isValidated && (
          <a 
            href={urlState.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center text-black hover:text-gray-600 transition-colors"
          >
            {urlState.isValid ? (
              <>Read more <ExternalLink className="w-4 h-4 ml-1" /></>
            ) : (
              <>
                {urlState.searchFallback} <Search className="w-4 h-4 ml-1" />
              </>
            )}
          </a>
        )}
        
        {!urlState.isValidated && (
          <div className="mt-4 inline-flex items-center text-gray-400">
            Validating source...
          </div>
        )}
      </div>
    </div>
  );
};

export default SignalCard;
