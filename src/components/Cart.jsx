// src/components/Cart.jsx

import React, { useState } from 'react';
import { calculateTotal } from '../services/calculateTotal';
import AddressForm from './AddressForm';

const Cart = ({ cartItems, onClearCart }) => {
  const [addressData, setAddressData] = useState(null);

  // Handle item quantity change
  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    // Update cart with new quantities (you can pass this updated data to the parent component if needed)
    onClearCart(updatedCart); // Assuming `onClearCart` is used to update the cart in the parent
  };

  const handleAddressSubmit = (address) => {
    setAddressData(address);
    // Proceed to the confirmation step or final order processing
    console.log('Order confirmed with address:', address);
  };

  const totalPrice = calculateTotal(cartItems);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      
      {/* Cart items */}
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.imageUrl} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
                <p>Serves: {item.servings} person(s) per serving</p>
                <div>
                  <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                  <input
                    type="number"
                    id={`quantity-${item.id}`}
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value, 10))
                    }
                    min="1"
                  />
                </div>
                <p>Subtotal: ${(item.price / item.servings) * item.quantity}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Total price */}
      <div className="cart-summary">
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <button onClick={onClearCart}>Clear Cart</button>
      </div>

      {/* Address form */}
      {!addressData ? (
        <AddressForm onSubmit={handleAddressSubmit} />
      ) : (
        <div>
          <h3>Order Summary</h3>
          <p>Your order will be delivered to:</p>
          <p>{addressData.address}, {addressData.city}, {addressData.zipCode}</p>
          <button onClick={() => alert('Order placed!')}>Place Order</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
