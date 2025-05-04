export const calculateTotal = (cartItems) => {
    return cartItems.reduce((total, item) => {
      const { price, servings, quantity } = item;
  
      // Calculate the total price for this food item
      const itemTotal = (price / servings) * quantity; // price per serving * number of servings ordered
      return total + itemTotal; // Add the item total to the overall total
    }, 0);
  };
  