import React from 'react';

const qa = [
  {
    q: 'Q1. How is front end different from back end?',
    a: 'Front end is the user interface in the browser; back end handles business logic, databases, and APIs. They collaborate via HTTP/JSON and shared contracts.',
  },
  {
    q: 'Q2. Why is accessibility important?',
    a: 'Accessibility ensures people with disabilities can use the product. It is a legal and ethical requirement that also improves usability for everyone.',
  },
  {
    q: 'Q3. How do you measure performance?',
    a: 'Use Core Web Vitals (LCP, CLS, INP), Lighthouse, and real-user monitoring. Optimize bundle size, critical rendering path, and caching.',
  },
  {
    q: 'Q4. When do you choose TypeScript?',
    a: 'TypeScript adds type safety, improves IDE feedback, and reduces runtime errors—especially valuable in medium-to-large codebases and shared component libraries.',
  },
  {
    q: 'Q5. How do you manage state effectively?',
    a: 'Keep state as local as possible, lift only when needed, and use patterns like context or dedicated stores. Cache server state and separate it from UI state.',
  },
  {
    q: 'Q6. What is your approach to testing?',
    a: 'Test user-facing behavior with RTL, cover critical logic with unit tests, and add end-to-end tests for flows. Automate in CI and keep tests fast and reliable.',
  },
  {
    q: 'Q7. How do you ensure design quality?',
    a: 'Adopt a design system, use tokens and accessible color contrast, and collaborate with designers. Run visual regression tests for critical UI.',
  },
  {
    q: 'Q8. How do you stay current?',
    a: 'Follow W3C standards, MDN, and community leaders; read release notes; build small experiments; and participate in code reviews to learn from peers.',
  },
];

const QandA = () => {
  return (
    <section className="bg-white max-w-4xl mx-auto my-6 md:my-10 p-6 md:p-10 rounded-2xl shadow-sm border border-gray-200">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900">3) Q&A — Demonstrating Understanding</h2>
      <div className="mt-6 space-y-5">
        {qa.map(({ q, a }) => (
          <div key={q} className="p-5 rounded-xl border border-gray-200 bg-gray-50">
            <p className="font-semibold text-gray-900">{q}</p>
            <p className="mt-1 text-gray-700 leading-relaxed">{a}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-sm text-gray-500">
        Tip: Use your browser's Print function and choose "Save as PDF" to export this as a 3-page document.
      </p>
    </section>
  );
};

export default QandA;
