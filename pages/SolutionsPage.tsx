
import React from 'react';
import PageWrapper from '../components/PageWrapper';

const solutions = [
  {
    icon: 'fa-recycle',
    title: 'Reduce, Reuse, Recycle',
    description: 'Minimize waste by following the 3 R\'s. Choose products with less packaging and recycle materials like paper, plastic, and glass.',
    color: 'green',
  },
  {
    icon: 'fa-bolt',
    title: 'Conserve Energy',
    description: 'Turn off lights and electronics when not in use. Use energy-efficient appliances to reduce the demand on power plants.',
    color: 'yellow',
  },
  {
    icon: 'fa-bus',
    title: 'Use Public Transport',
    description: 'Walk, bike, or use public transportation instead of driving a car to reduce air pollution and traffic congestion.',
    color: 'blue',
  },
  {
    icon: 'fa-tree',
    title: 'Plant More Trees',
    description: 'Trees absorb carbon dioxide, a major greenhouse gas, and release oxygen. Participate in tree-planting events in your community.',
    color: 'teal',
  },
  {
    icon: 'fa-shopping-bag',
    title: 'Avoid Single-Use Plastics',
    description: 'Use reusable bags, water bottles, and coffee cups. Say no to plastic straws and cutlery to reduce plastic waste in our oceans and landfills.',
    color: 'purple',
  },
  {
    icon: 'fa-lightbulb',
    title: 'Educate Others',
    description: 'Spread awareness about the causes and effects of pollution. Encourage friends and family to adopt more environmentally friendly habits.',
    color: 'pink',
  },
];

const SolutionsPage: React.FC = () => {
  return (
    <PageWrapper title="Solutions to Pollution">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((solution, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
            <div className={`text-4xl text-${solution.color}-500 mb-4`}>
              <i className={`fas ${solution.icon}`}></i>
            </div>
            <h3 className="text-xl font-bold text-blue-800 mb-2">{solution.title}</h3>
            <p className="text-gray-600">{solution.description}</p>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default SolutionsPage;
