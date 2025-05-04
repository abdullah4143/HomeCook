import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="max-w-screen-xl container mx-auto px-6 flex items-center justify-between">
        <div className="logo">
          <h1 className="text-2xl font-bold">HomeCook</h1>
        </div>
        <nav className="navbar">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-yellow-400 transition duration-200">Home</Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-yellow-400 transition duration-200">Cart</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
