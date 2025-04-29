import React, { useContext, useMemo } from 'react';
import { CartContext } from '../context/CartContextValue';

const Orders = () => {
  const { cart, toggleCartItem } = useContext(CartContext);
  
  // Constants for shipping fee
  const SHIPPING_FEE = 2500; // ₦2,500
  
  // Calculate total price of items in cart
  const subtotal = useMemo(() => {
    return cart.reduce((total, item) => {
      // Remove currency symbol and commas from price string and convert to number
      const priceNumber = parseFloat(item.price.replace('₦', '').replace(/,/g, ''));
      return total + priceNumber;
    }, 0);
  }, [cart]);
  
  // Calculate total including shipping fee
  const total = subtotal + (cart.length > 0 ? SHIPPING_FEE : 0);
  
  // Format number to currency string
  const formatCurrency = (amount) => {
    return `₦${amount.toLocaleString()}`;
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {/* Cart items */}
          {cart.map(item => (
            <div key={item.id} className="border p-4 rounded-md shadow flex justify-between items-center">
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-text-grey">{item.company}</p>
                <p className="font-bold">{item.price}</p>
              </div>
              <button 
                onClick={() => toggleCartItem(item)}
                className="bg-red-500 text-white py-2 px-4 rounded-full text-sm"
              >
                Remove
              </button>
            </div>
          ))}
          
          {/* Order summary */}
          <div className="border p-4 rounded-md shadow mt-4">
            <h2 className="font-bold text-lg mb-2">Order Summary</h2>
            <div className="flex justify-between py-2 border-b">
              <span>Subtotal</span>
              <span className="font-medium">{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span>Shipping fee</span>
              <span className="font-medium">{formatCurrency(SHIPPING_FEE)}</span>
            </div>
            <div className="flex justify-between py-2 mt-2">
              <span className="font-bold">Total</span>
              <span className="font-bold">{formatCurrency(total)}</span>
            </div>
            
            <button className="w-full bg-primary text-white py-3 rounded-md mt-4 font-medium">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;