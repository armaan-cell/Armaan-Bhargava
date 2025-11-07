
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Types', path: '/types' },
  { name: 'Causes & Effects', path: '/causes-effects' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Quiz', path: '/quiz' },
  { name: 'Gallery', path: '/gallery' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
      isActive
        ? 'bg-blue-500 text-white'
        : 'text-blue-100 hover:bg-green-600 hover:text-white'
    }`;
  
  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
      isActive
        ? 'bg-blue-500 text-white'
        : 'text-blue-100 hover:bg-green-600 hover:text-white'
    }`;

  return (
    <header className="bg-green-700 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-white text-xl font-bold flex items-center">
              <i className="fas fa-leaf mr-2 text-blue-300"></i>
              Pollution Hub
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink key={link.name} to={link.path} className={linkClass}>
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-green-800 inline-flex items-center justify-center p-2 rounded-md text-blue-200 hover:text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <i className="fas fa-bars"></i>
              ) : (
                <i className="fas fa-times"></i>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={mobileLinkClass}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
