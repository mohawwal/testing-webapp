import React, { useContext } from 'react';
import { DoorClosed, Bike } from 'lucide-react';
import { CartContext } from '../context/CartContextValue';

const Home = () => {
  const { toggleCartItem, isProductInCart } = useContext(CartContext);

  const productList = [
    {
      id: 1,
      name: 'Wireless Headphones',
      company: 'Bean Phones',
      description: 'High quality wireless headphones with noise cancellation.',
      price: '₦89,999',
      image: ''
    },
    {
      id: 2,
      name: 'Smart Watch',
      company: 'Smarties Tech',
      description: 'Track your fitness goals with this smart watch.',
      price: '₦129,999',
      image: ''
    },
    {
      id: 3,
      name: 'Bluetooth Speaker',
      company: 'SoundVibe',
      description: 'Portable speaker with deep bass and clear sound.',
      price: '₦59,999',
      image: ''
    },
    {
      id: 4,
      name: 'Gaming Mouse',
      company: 'ClickPro',
      description: 'Ergonomic gaming mouse with customizable buttons.',
      price: '₦49,999',
      image: ''
    }
  ];

  return (
    <div className="flex flex-col gap-6 my-6 px-4">
      {productList.map((product) => {
        const isInCart = isProductInCart(product.id);
        
        return (
          <div
            key={product.id}
            className="flex flex-col border rounded-xl overflow-hidden shadow-nav"
          >
            <img
              src={product.image || "/api/placeholder/400/320"}
              alt={product.name}
              className="w-full h-48 object-cover bg-gray-200"
            />

            <div className="flex justify-between flex-wrap items-center py-2 px-4">
              <h2 className="font-bold text-[14px]">{product.company}</h2>
              <button
                onClick={() => toggleCartItem(product)}
                className={`py-2 px-4 rounded-full transition-colors ${
                  isInCart ? 'bg-primary-dark' : 'bg-primary'
                }`}
              >
                <p className='text-white text-[12px]'>
                  {isInCart ? 'Remove from cart' : 'Add to cart'}
                </p>
              </button>
            </div>

            <div className="flex flex-col flex-wrap gap-2 px-4 pb-4 text-[13px] text-text-grey">
              <div className="flex items-center gap-2">
                <DoorClosed className="w-4 h-4" />
                <span>|</span>
                <Bike className="w-4 h-4" />
              </div>
              <h3 className="font-medium text-black">{product.name}</h3>
              <p>{product.description}</p>
              <p className="font-bold text-black">{product.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;