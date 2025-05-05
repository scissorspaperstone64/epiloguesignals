import React, { useState, useEffect } from 'react';
import { VibeSignal } from '../types';
import { ExternalLink, Search } from 'lucide-react';
import { validateUrl, createSearchUrl } from '../utils/urlValidator';

interface EmergingVibeSignalsProps {
  signals: VibeSignal[];
}

const EmergingVibeSignals: React.FC<EmergingVibeSignalsProps> = ({ signals }) => {
  const [validatedSignals, setValidatedSignals] = useState<Array<VibeSignal & {
    isValidated: boolean;
    isValid: boolean;
    validatedUrl: string;
    searchFallback?: string;
  }>>([]);

  useEffect(() => {
    const validateSignals = async () => {
      const validationPromises = signals.map(async (signal) => {
        const result = await validateUrl(signal.url);
        return {
          ...signal,
          isValidated: true,
          isValid: result.isValid,
          validatedUrl: result.isValid ? result.validatedUrl : createSearchUrl(result.searchFallback || ''),
          searchFallback: result.searchFallback
        };
      });

      const validatedResults = await Promise.all(validationPromises);
      setValidatedSignals(validatedResults);
    };

    validateSignals();
  }, [signals]);

  return (
    <div className="mx-auto w-3/4 bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Emerging Vibe Signals</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Signal
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Source
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Link
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {validatedSignals.map((signal) => (
              <tr key={signal.id}>
                <td className="px-6 py-4 whitespace-normal">
                  <div className="text-sm text-gray-900">{signal.text}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{signal.source}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {signal.isValidated ? (
                    <a 
                      href={signal.validatedUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-black hover:text-gray-600 inline-flex items-center"
                    >
                      {signal.isValid ? (
                        <>View Source <ExternalLink className="w-4 h-4 ml-1" /></>
                      ) : (
                        <>{signal.searchFallback} <Search className="w-4 h-4 ml-1" /></>
                      )}
                    </a>
                  ) : (
                    <span className="text-gray-400">Validating...</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmergingVibeSignals;
