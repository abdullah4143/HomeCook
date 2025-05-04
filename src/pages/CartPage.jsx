// src/pages/CartPage.jsx

import React, { useState } from 'react';
import Cart from '../components/Cart';
import AddressForm from '../components/AddressForm';
// import { useHistory } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [isAddressFormVisible, setAddressFormVisible] = useState(false);
  // const history = useHistory();

  // Function to update quantity in the cart
  const updateCartItemQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Handle address submission
  const handleAddressSubmit = (address) => {
    setDeliveryAddress(address);
    setAddressFormVisible(false);
  };

  // Proceed to confirmation page
  const handleProceedToCheckout = () => {
    if (!deliveryAddress) {
      setAddressFormVisible(true);
    } else {
      // history.push('/confirmation', { cartItems, deliveryAddress }); // Pass cartItems and deliveryAddress to Confirmation page
    }
  };

  return (
    <div>
      <h1>Your Cart</h1>
      <Cart
        cartItems={cartItems}
        onUpdateQuantity={updateCartItemQuantity}
        onRemoveFromCart={removeFromCart}
      />

      {isAddressFormVisible ? (
        <AddressForm onSubmit={handleAddressSubmit} />
      ) : (
        <div className="cart-actions">
          <h3>Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h3>
          <button onClick={handleProceedToCheckout}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
