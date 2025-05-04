// src/components/QuantitySelector.jsx

import React, { useState } from 'react';

const QuantitySelector = ({ maxServings, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    if (quantity < maxServings) {
      setQuantity(quantity + 1);
      onQuantityChange(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={handleDecrease}
        disabled={quantity <= 1}
        className="w-8 h-8 bg-gray-300 text-gray-700 rounded-full flex items-center justify-center disabled:bg-gray-200 disabled:text-gray-400 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        -
      </button>
      <span className="text-xl font-medium">{quantity}</span>
      <button
        onClick={handleIncrease}
        disabled={quantity >= maxServings}
        className="w-8 h-8 bg-gray-300 text-gray-700 rounded-full flex items-center justify-center disabled:bg-gray-200 disabled:text-gray-400 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
