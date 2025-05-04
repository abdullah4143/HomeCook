// src/components/Confirmation.jsx

import React from 'react';
// import { useHistory } from 'react-router-dom'; // You can use this for navigation to another page like home or order history.

const ConfirmationPage = ({ cartItems, totalPrice, deliveryAddress }) => {
  // const history = useHistory();

  // Function to handle the "Back to Home" button click
  const handleBackToHome = () => {
    history.push('/'); // Redirects to the home page
  };

  return (
    <div className="confirmation">
      <h1>Order Confirmation</h1>

      <div className="order-details">
        <h2>Your Order</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <p>{item.name} - {item.quantity} servings</p>
              <p>${(item.price * item.quantity).toFixed(2)}</p>
            </li>
          ))}
        </ul>

        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        <h3>Delivery Address:</h3>
        <p>{deliveryAddress}</p>
      </div>

      <div className="order-actions">
        <button onClick={handleBackToHome}>Back to Home</button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
