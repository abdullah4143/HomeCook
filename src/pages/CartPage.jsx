// src/components/CartPage.jsx

import React from 'react';
import useCartStore from '../store/useCartStore';
import { calculateTotal } from '../services/calculateTotal';
import AddressForm from '../components/AddressForm';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const navigate = useNavigate();

  const {
    cartItems,
    deliveryAddress,
    updateQuantity,
    clearCart,
    setAddress,
  } = useCartStore();

  const totalPrice = calculateTotal(cartItems);

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(itemId, newQuantity);
    }
  };

  const handleAddressSubmit = (address) => {
    setAddress(address);
    navigate('confirm');
    console.log('Order confirmed with address:', address);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Cart</h2>

      {/* Cart Items */}
      <div className="space-y-6">
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 border rounded-md"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.description}</p>
                <p className="text-gray-600 mt-1">Price: ${item.price}</p>
                <p className="text-gray-600">Serves: {item.servings} person(s)</p>
                <div className="mt-2 flex items-center gap-2">
                  <label htmlFor={`quantity-${item.id}`} className="text-sm text-gray-600">
                    Quantity:
                  </label>
                  <input
                    type="number"
                    id={`quantity-${item.id}`}
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value, 10))
                    }
                    min="1"
                    className="w-16 border border-gray-300 rounded px-2 py-1 text-sm"
                  />
                </div>
                <p className="mt-2 text-sm font-medium text-gray-700">
                  Subtotal: ${(item.price / item.servings) * item.quantity}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Cart Summary */}
      <div className="mt-8 flex justify-between items-center border-t pt-4">
        <h3 className="text-xl font-semibold text-gray-800">
          Total: ${totalPrice.toFixed(2)}
        </h3>
        <button
          onClick={clearCart}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Clear Cart
        </button>
      </div>

      {/* Address Form or Summary */}
      <div className="mt-8">
        {!deliveryAddress ? (
          <AddressForm onSubmit={handleAddressSubmit} />
        ) : (
          <div className="bg-green-50 p-4 rounded-md border border-green-200 mt-6">
            <h3 className="text-lg font-semibold text-green-800 mb-2">Order Summary</h3>
            <p className="text-sm text-green-700">
              Your order will be delivered to:
              <br />
              {deliveryAddress.address}, {deliveryAddress.city}, {deliveryAddress.zipCode}
            </p>
            <button
              onClick={() => alert('Order placed!')}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Place Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
