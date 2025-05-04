import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';

const ConfirmationPage = () => {
  const navigate = useNavigate();
  const { cartItems, deliveryAddress, clearCart } = useCartStore();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleBackToHome = () => {
    clearCart();
    navigate('/');
  };

  const handlePlaceOrder = () => {
    // Here you could send the order to your server or API for processing
    alert('Your order has been placed successfully!');
    clearCart();
    navigate('/'); 
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
          Order Confirmation
        </h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Your Order</h2>
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li key={item.id} className="py-4 flex justify-between items-center">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.quantity} serving(s)</p>
                </div>
                <p className="text-right font-semibold text-gray-700">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800">Total Price:</h3>
          <p className="text-xl text-green-600 font-bold">${totalPrice.toFixed(2)}</p>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800">Delivery Address:</h3>
          {deliveryAddress ? (
            <p className="text-gray-700">
              {deliveryAddress.address}, {deliveryAddress.city}, {deliveryAddress.zipCode}
            </p>
          ) : (
            <p className="text-red-600">No address provided.</p>
          )}
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={handleBackToHome}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md shadow-md"
          >
            Back to Home
          </button>
          <button
            onClick={handlePlaceOrder}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow-md"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
