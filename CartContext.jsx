// Example of CartContext.jsx defining CartProvider

import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    items: [],
    total: 0
  });

  const addToCart = (item) => {
    // Implement addToCart logic
  };

  const removeFromCart = (item) => {
    // Implement removeFromCart logic
  };

  const clearCart = () => {
    // Implement clearCart logic
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartContext;