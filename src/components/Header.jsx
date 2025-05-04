import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="max-w-screen-xl container mx-auto px-6 flex items-center justify-between">
        <div className="logo">
          <h1 className="text-2xl font-bold">HomeCook</h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex navbar">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-yellow-400 transition duration-200">Home</Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-yellow-400 transition duration-200">Cart</Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-800 text-white">
          <ul className="space-y-4 py-4 px-6">
            <li>
              <Link to="/" className="block hover:text-yellow-400">Home</Link>
            </li>
            <li>
              <Link to="/cart" className="block hover:text-yellow-400">Cart</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
