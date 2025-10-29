import React from 'react';

const RoleOverview = () => {
  return (
    <section className="print-page bg-white max-w-4xl mx-auto my-6 md:my-10 p-6 md:p-10 rounded-2xl shadow-sm border border-gray-200">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900">1) What is a Front End Developer?</h2>
      <p className="mt-3 text-gray-700 leading-relaxed">
        A Front End Developer builds the visual and interactive layer of web applications—the
        parts users see and interact with in the browser. They translate design and product
        requirements into accessible, performant, and maintainable interfaces using web
        technologies.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-5 rounded-xl border border-gray-200 bg-gray-50">
          <h3 className="font-semibold text-gray-900">Core Technologies</h3>
          <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
            <li>HTML for semantic structure and accessibility</li>
            <li>CSS (and frameworks like Tailwind) for layout and visual design</li>
            <li>JavaScript/TypeScript for interactivity and state management</li>
            <li>Frameworks: React, Vue, Angular</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl border border-gray-200 bg-gray-50">
          <h3 className="font-semibold text-gray-900">Key Skills</h3>
          <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
            <li>Accessibility (WCAG), semantic HTML, ARIA practices</li>
            <li>Responsive design and cross-browser compatibility</li>
            <li>State and data flow patterns (props, context, stores)</li>
            <li>Performance optimization and Core Web Vitals</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-5 rounded-xl border border-gray-200">
          <h4 className="font-semibold text-gray-900">Tooling</h4>
          <p className="mt-2 text-gray-700">
            Module bundlers (Vite, Webpack), package managers (npm), linting/formatting
            (ESLint, Prettier), testing (Jest, React Testing Library), CI/CD, and code
            review workflows with Git.
          </p>
        </div>
        <div className="p-5 rounded-xl border border-gray-200">
          <h4 className="font-semibold text-gray-900">Collaboration</h4>
          <p className="mt-2 text-gray-700">
            Works closely with designers, product managers, and back end engineers.
            Communicates trade-offs, proposes UX improvements, and ensures feasibility.
          </p>
        </div>
        <div className="p-5 rounded-xl border border-gray-200">
          <h4 className="font-semibold text-gray-900">Quality</h4>
          <p className="mt-2 text-gray-700">
            Ships accessible, secure, and well-tested features. Monitors analytics and
            error tracking to continuously improve the experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RoleOverview;
