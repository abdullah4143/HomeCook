import React, { useState } from 'react';
import FoodItem from '../components/FoodItem';
import { getMenuForToday } from '../services/getMenu';  // Assuming you have a service for getting the menu data
import Cart from '../components/Cart';  // Assuming you have a Cart component

const HomePage = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      // Check if the item is already in the cart
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        return [...prevItems, item];
      }
    });
  };

  // Assuming getMenuForToday returns an array of menu items for today
  const menu = getMenuForToday();

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Today's Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {menu.map((item) => (
          <FoodItem key={item.id} item={item} onAddToCart={addToCart} />
        ))}
      </div>

      {/* Cart Preview Section */}
      {cartItems.length > 0 && (
        <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800">Your Cart</h2>
          <Cart cartItems={cartItems} />
        </div>
      )}
    </div>
  );
};

export default HomePage;
