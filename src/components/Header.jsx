import React from 'react';
import { Download } from 'lucide-react';

const Header = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="w-full sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-gray-200 print:border-none print:static">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
            Front End Developer — Role Guide
          </h1>
          <p className="text-sm md:text-base text-gray-600 mt-1">
            A concise, 3-page overview with a Q&A to demonstrate understanding
          </p>
        </div>
        <button
          onClick={handlePrint}
          className="print:hidden inline-flex items-center gap-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 font-medium shadow-sm transition"
          aria-label="Download as PDF"
        >
          <Download className="h-4 w-4" />
          <span>Download PDF</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
