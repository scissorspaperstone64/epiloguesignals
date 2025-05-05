import React from 'react';
import { Copy } from 'lucide-react';

const SuggestedPostPrompt: React.FC = () => {
  const [copied, setCopied] = React.useState(false);
  
  const postContent = `The future of work isn't about replacing experience with youth—it's about leveraging the unique perspective that comes with decades of pattern recognition.

A fascinating signal I'm tracking: Companies that have implemented "wisdom councils" (advisory boards of 60+ professionals) are reporting 27% higher innovation success rates than those relying solely on traditional R&D teams.

This challenges our assumptions about innovation requiring youth, and suggests the most valuable perspective might be one that spans multiple economic and technological cycles.

What patterns have you recognized from your career that younger colleagues might miss? #EpilogueEconomy #FutureOfWork`;

  const handleCopy = () => {
    navigator.clipboard.writeText(postContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Suggested Post Prompt</h3>
            <p className="text-gray-600">Ready-to-polish content for your LinkedIn or Substack</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 relative">
            <div className="prose prose-slate max-w-none">
              {postContent.split('\n\n').map((paragraph, index) => (
                <p key={index} className={index === 0 ? "font-medium" : ""}>{paragraph}</p>
              ))}
            </div>
            
            <button 
              onClick={handleCopy}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-black hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Copy to clipboard"
            >
              <Copy size={18} />
              {copied && (
                <span className="absolute -bottom-8 right-0 text-xs bg-black text-white py-1 px-2 rounded">
                  Copied!
                </span>
              )}
            </button>
          </div>
          
          <div className="mt-4 text-sm text-gray-500">
            <p>Customize this content with your own insights before posting.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuggestedPostPrompt;
