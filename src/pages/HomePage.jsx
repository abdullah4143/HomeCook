import React from 'react';
import Cart from '../components/Cart';
import useCartStore from '../store/useCartStore';
import { getMenuForToday } from '../services/getMenu';
import FoodItem from '../components/FoodItem';

const HomePage = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  // const cartItems = useCartStore((state) => state.cartItems);

  const menu = getMenuForToday();

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Today's Menu</h1>

      <div className="flex flex-wrap justify-center gap-6">
        {menu.map((item) => (
          <FoodItem key={item.id} item={item} onAddToCart={addToCart} />
        ))}
      </div>

      {/* {cartItems.length > 0 && (
        <div className="mt-16 bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Cart</h2>
          <Cart />
        </div>
      )} */}
    </div>
  );
};

export default HomePage;
