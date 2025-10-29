import React from 'react';

const responsibilities = [
  {
    title: 'Build UI Components',
    detail:
      'Implement reusable components and pages following design systems, accessibility standards, and responsive layouts.',
  },
  {
    title: 'Integrate with APIs',
    detail:
      'Connect front end to back end services, manage async data, handle errors, and maintain consistent state.',
  },
  {
    title: 'Optimize Performance',
    detail:
      'Improve load times and interactivity using code splitting, caching, prefetching, and image optimization.',
  },
  {
    title: 'Test and Maintain',
    detail:
      'Write unit and integration tests, set up visual regression testing, and participate in code reviews.',
  },
  {
    title: 'Collaborate and Document',
    detail:
      'Work with design and product, document decisions, and provide clear PRs and technical specs.',
  },
];

const paths = [
  'UI Engineer',
  'Web Accessibility Specialist',
  'Design Systems Engineer',
  'Front End Architect',
  'Full-Stack Developer',
  'Engineering Manager',
];

const Responsibilities = () => {
  return (
    <section className="print-page bg-white max-w-4xl mx-auto my-6 md:my-10 p-6 md:p-10 rounded-2xl shadow-sm border border-gray-200">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900">2) Responsibilities and Career Path</h2>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {responsibilities.map((item) => (
          <div key={item.title} className="p-5 rounded-xl border border-gray-200 bg-gray-50">
            <h3 className="font-semibold text-gray-900">{item.title}</h3>
            <p className="mt-2 text-gray-700">{item.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 rounded-xl border border-blue-200 bg-blue-50">
        <h3 className="font-semibold text-blue-900">Career Growth</h3>
        <p className="mt-2 text-blue-900/90">
          Front end engineering offers both technical depth and leadership tracks. With strong fundamentals
          and a product mindset, developers can grow into roles like:
        </p>
        <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc list-inside text-blue-900/90">
          {paths.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Responsibilities;
