import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black py-8 px-4 md:px-8 border-t border-gray-200">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-6 md:mb-0 md:max-w-md">
            <h3 className="text-xl font-bold">The Epilogue Economy</h3>
            <p className="text-gray-600 mt-2">
              The Epilogue Economy represents that powerful intersection of wealth, wisdom, and willingness to work that defines today's generation of experienced professionals.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="mb-4 md:mb-0">
              <h4 className="font-semibold mb-2">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#dashboard" className="text-gray-600 hover:text-black transition-colors">Dashboard</a></li>
                <li><a href="#categories" className="text-gray-600 hover:text-black transition-colors">Categories</a></li>
                <li><a href="#about" className="text-gray-600 hover:text-black transition-colors">About</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Twitter</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Epilogue Economy Signals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
