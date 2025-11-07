
import React from 'react';
import PageWrapper from '../components/PageWrapper';

const causes = [
  { icon: 'fa-industry', text: 'Industrial emissions from factories and power plants.' },
  { icon: 'fa-car', text: 'Vehicle exhaust from cars, trucks, and airplanes.' },
  { icon: 'fa-tree', text: 'Deforestation, which reduces the Earth\'s capacity to absorb CO2.' },
  { icon: 'fa-recycle', text: 'Improper waste disposal and landfills.' },
  { icon: 'fa-tractor', text: 'Agricultural runoff from pesticides and fertilizers.' },
  { icon: 'fa-fire', text: 'Burning of fossil fuels like coal, oil, and natural gas.' },
];

const effects = [
  { icon: 'fa-head-side-cough', text: 'Respiratory problems and other health issues in humans.' },
  { icon: 'fa-thermometer-half', text: 'Global warming and climate change.' },
  { icon: 'fa-smog', text: 'Acid rain, which damages forests and buildings.' },
  { icon: 'fa-fish', text: 'Harm to wildlife and marine ecosystems.' },
  { icon: 'fa-water', text: 'Contamination of drinking water sources.' },
  { icon: 'fa-leaf', text: 'Soil degradation, impacting agriculture.' },
];

const InfoCard: React.FC<{ title: string; color: string; items: { icon: string; text: string }[] }> = ({ title, color, items }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className={`text-3xl font-bold text-center mb-6 text-${color}-600`}>{title}</h2>
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <div className={`text-${color}-500 text-xl mr-4 mt-1 w-6 text-center`}>
            <i className={`fas ${item.icon}`}></i>
          </div>
          <span className="text-gray-700">{item.text}</span>
        </li>
      ))}
    </ul>
  </div>
);

const CausesEffectsPage: React.FC = () => {
  return (
    <PageWrapper title="Causes & Effects">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <InfoCard title="Causes" color="red" items={causes} />
        <InfoCard title="Effects" color="green" items={effects} />
      </div>
    </PageWrapper>
  );
};

export default CausesEffectsPage;
