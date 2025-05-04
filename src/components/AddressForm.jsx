// src/components/AddressForm.jsx

import React, { useState } from 'react';

const AddressForm = ({ onSubmit }) => {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input fields
    if (!address || !city || !zipCode) {
      setError('Please fill in all fields.');
      return;
    }

    // Clear error message if form is valid
    setError('');
    
    // Call the onSubmit prop function with the address data
    const addressData = { address, city, zipCode };
    onSubmit(addressData);
  };

  return (
    <div className="address-form">
      <h2>Delivery Address</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="address">Street Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your street address"
            required
          />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter your city"
            required
          />
        </div>
        <div>
          <label htmlFor="zipCode">ZIP Code:</label>
          <input
            type="text"
            id="zipCode"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            placeholder="Enter your ZIP code"
            required
          />
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit">Submit Address</button>
      </form>
    </div>
  );
};

export default AddressForm;
