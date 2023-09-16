import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const ItemDetail = ({ item }) => {
  const { name, price, sinopsis, image } = item;
  const { addToCart } = useContext(CartContext);

  return (
    <div className='bg-white shadow-lg rounded-lg p-6 lg:flex lg:items-center'>
      {/* Image */}
      <div className='flex-1 lg:mr-8 text-center lg:text-left'>
        <img className='max-w-[200px] lg:max-w-sm mb-8 lg:mb-0 rounded' src={image} alt={name} />
      </div>

      {/* Text Content */}
      <div className='flex-1 text-center lg:text-left'>
        <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>{name}</h1>
        <p className='mb-8'>{sinopsis}</p>
        <div className='text-xl text-red-500 font-medium mb-6'>$ {price}</div>
        <button onClick={() => addToCart(item, item.id)} className='bg-primary py-4 px-8 text-white'>Add to cart</button>
      </div>
    </div>
  );
};

export default ItemDetail;