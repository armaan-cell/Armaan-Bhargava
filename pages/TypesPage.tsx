
import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';

type PollutionType = 'Air' | 'Water' | 'Land' | 'Noise';

const pollutionData = {
  Air: {
    title: 'Air Pollution',
    icon: 'fa-wind',
    description: 'Air pollution is the presence of substances in the atmosphere that are harmful to the health of humans and other living beings, or cause damage to the climate or to materials. Common pollutants include particulate matter, carbon monoxide, sulfur dioxide, and nitrogen oxides.',
    image: 'https://picsum.photos/600/400?image=1043',
  },
  Water: {
    title: 'Water Pollution',
    icon: 'fa-tint',
    description: 'Water pollution occurs when harmful substances—often chemicals or microorganisms—contaminate a stream, river, lake, ocean, aquifer, or other body of water, degrading water quality and rendering it toxic to humans or the environment. Plastic waste is a major contributor.',
    image: 'https://picsum.photos/600/400?image=1060',
  },
  Land: {
    title: 'Land Pollution',
    icon: 'fa-mountain',
    description: 'Land pollution is the degradation of Earth\'s land surfaces often caused by human activities and their misuse of land resources. It happens when waste is not disposed of properly, or from agricultural and industrial practices. Deforestation and soil erosion are also forms of land pollution.',
    image: 'https://picsum.photos/600/400?image=169',
  },
  Noise: {
    title: 'Noise Pollution',
    icon: 'fa-volume-up',
    description: 'Noise pollution is generally defined as regular exposure to elevated sound levels that may lead to adverse effects in humans or other living organisms. Sources include industrial machinery, transportation (traffic, rail, airplanes), and loud music.',
    image: 'https://picsum.photos/600/400?image=1078',
  },
};

const TypesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PollutionType>('Air');
  const activeData = pollutionData[activeTab];

  const getTabClass = (tabName: PollutionType) => {
    return `flex-1 py-3 px-4 text-center font-semibold rounded-t-lg cursor-pointer transition-colors duration-300 focus:outline-none ${
      activeTab === tabName
        ? 'bg-blue-600 text-white'
        : 'bg-gray-200 text-gray-600 hover:bg-blue-200'
    }`;
  };

  return (
    <PageWrapper title="Types of Pollution">
      <div className="max-w-4xl mx-auto">
        <div className="flex border-b-2 border-blue-600">
          {(Object.keys(pollutionData) as PollutionType[]).map((type) => (
            <button key={type} className={getTabClass(type)} onClick={() => setActiveTab(type)}>
              <i className={`fas ${pollutionData[type].icon} mr-2`}></i>
              {type}
            </button>
          ))}
        </div>
        <div className="bg-white p-6 md:p-8 rounded-b-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">{activeData.title}</h3>
              <p className="text-gray-700 leading-relaxed">{activeData.description}</p>
            </div>
            <img
              src={activeData.image}
              alt={activeData.title}
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default TypesPage;
