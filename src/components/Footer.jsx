import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="footer-left mb-6 sm:mb-0">
          <p>&copy; {new Date().getFullYear()} HomeCook. All rights reserved.</p>
        </div>
        <div className="footer-center mb-6 sm:mb-0">
          <ul className="flex space-x-6">
            <li>
              <a href="/about" className="hover:text-yellow-400 transition duration-200">About Us</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-400 transition duration-200">Contact</a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-yellow-400 transition duration-200">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          <p className="mb-2">Follow us on:</p>
          <ul className="social-links flex space-x-6">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition duration-200">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition duration-200">Twitter</a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition duration-200">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
