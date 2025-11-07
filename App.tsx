
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TypesPage from './pages/TypesPage';
import CausesEffectsPage from './pages/CausesEffectsPage';
import SolutionsPage from './pages/SolutionsPage';
import QuizPage from './pages/QuizPage';
import GalleryPage from './pages/GalleryPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen font-sans text-gray-800">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/types" element={<TypesPage />} />
            <Route path="/causes-effects" element={<CausesEffectsPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
