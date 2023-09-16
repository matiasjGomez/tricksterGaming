import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io'
import {CartContext} from '../contexts/CartContext'

const CartItem = ({item}) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);

  //destructure item from FireBase
  const {id, name, category_id, image, price, amount} = item;
  return (
    <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
    <div className='w-full min-h-[150px] flex items-center gap-x-4'>
      {/* image */}
      <Link to={`/item/${id}`}>
      <img className='max-w-[80px]' src={image} alt={name} />
      </Link>
      <div className='w-full flex flex-col'>
        {/* item name and remover */}
        <div className='flex justify-between mb-2'>
        <Link to={`/item/${id}`} className="text-sm uppercase font-medium max-w-[204px
        ] text-primary hover:underline">{name}</Link>
        {/* close */}
        <div onClick={() => removeFromCart(id)} className='text-xl cursor-pointer'>
          <IoMdClose className='text-gray-500 hover:text-red-500 transition '/>
        </div>
        </div>
        {/* category */}
        <div className='flex justify-between mb-2'>
        <Link to={`/category/${category_id}`} className='text-sm uppercase font-small hover:underline'>{category_id}
        </Link>
        </div>
         {/* qtty, item price and final price*/}
        <div className='flex gap-x-2 h-[36px] text-sm'>
          <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium'>
            {/* decrease utility */}
            <div onClick={() => decreaseAmount(id)} className='flex-1 flex justify-center items-center cursor-pointer bg-red-500 h-full text-white'>
              <IoMdRemove />
            </div>
            {/* amount */}
            <div className='h-full flex justify-center items-center px-2'>
              {amount}
            </div>
            {/* increase utility */}
            <div onClick={() => increaseAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer bg-red-500 h-full text-white'>
              <IoMdAdd />
            </div>

          </div>
          {/*item price*/}
          <div className='flex-1 flex items-center justify-around'>
            $ {price}
          </div>
          {/*total price for this item*/}
          <div className='flex-1 flex justify-end items-center text-primary font-medium'>{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CartItem;
