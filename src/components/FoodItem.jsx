// src/components/FoodItem.jsx

import React from 'react';

const FoodItem = ({ item, onAddToCart }) => {
  const { id, name, description, price, servings, imageUrl } = item;

  const handleAddToCart = () => {
    onAddToCart(item); 
  };

  return (
    <div key={id} className="max-w-xs rounded-lg border border-gray-300 shadow-lg overflow-hidden">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        <p className="text-gray-800 font-medium mt-2">Price: ${price}</p>
        <p className="text-gray-600 text-sm mt-1">Serves: {servings} person(s) per serving</p>
        <button 
          onClick={handleAddToCart} 
          className="w-full bg-blue-500 text-white py-2 mt-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
