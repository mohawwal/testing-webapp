import React, { useState, useEffect } from 'react';
import { CartContext } from './CartContextValue';

// This is the only component being exported
export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Check if a product is in the cart
  const isProductInCart = (productId) => {
    return cart.some(item => item.id === productId);
  };

  // Add or remove product from cart
  const toggleCartItem = (product) => {
    if (isProductInCart(product.id)) {
      setCart(cart.filter(item => item.id !== product.id));
    } else {
      setCart([...cart, product]);
    }
  };

  const value = {
    cart,
    toggleCartItem,
    isProductInCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}