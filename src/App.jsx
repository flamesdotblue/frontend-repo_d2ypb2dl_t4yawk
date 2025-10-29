import React from 'react';
import Header from './components/Header';
import RoleOverview from './components/RoleOverview';
import Responsibilities from './components/Responsibilities';
import QandA from './components/QandA';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-indigo-50 to-fuchsia-50 text-gray-900">
      {/* Print-specific styles to force page breaks */}
      <style>
        {`
          @media print {
            /* Remove background gradients for clean PDF */
            body { background: white !important; }
            .print-page { page-break-after: always; }
          }
        `}
      </style>

      <Header />

      <main className="px-4">
        <RoleOverview />
        <Responsibilities />
        <div className="print-page">
          <QandA />
        </div>
      </main>

      <footer className="print:hidden text-center text-sm text-gray-600 py-8">
        Built with modern web standards. Use the Download button to export a PDF.
      </footer>
    </div>
  );
}

export default App;
