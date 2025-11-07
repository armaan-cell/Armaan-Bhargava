
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="text-center">
      <div
        className="relative h-96 rounded-lg bg-cover bg-center flex flex-col items-center justify-center text-white p-4"
        style={{ backgroundImage: `url('https://picsum.photos/1200/400?image=1015')` }}
      >
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Welcome to JMC Science Exhibition
          </h1>
          <p className="text-xl md:text-2xl font-light">An Educational Guide to Understanding Pollution</p>
        </div>
      </div>

      <div className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Planet, Our Responsibility</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Pollution is one of the biggest challenges facing our world today. It affects the air we breathe, the water we drink, and the land that grows our food. This exhibition is designed to help you understand what pollution is, where it comes from, and what we can all do to create a cleaner, healthier planet for future generations.
        </p>
        <Link 
          to="/types" 
          className="bg-green-600 text-white font-bold py-3 px-8 rounded-full hover:bg-green-700 transition-transform transform hover:scale-105 duration-300 inline-block text-lg"
        >
          Explore Types of Pollution
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
