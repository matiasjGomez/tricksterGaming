import React, { useContext } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs'
//import cart context
import { CartContext } from '../contexts/CartContext'

const CardProduct = ({ item }) => {
    const { addToCart } = useContext(CartContext);
    //destructure product
    const { id, image, category_id, name, price } = item;

    return(
        <div>
            <div className='border border-[#e4e4e4] rounded h-[300px] mb-4 relative overflow-hidden group transition'>
                <div className='w-full h-full flex justify-center items-center'>
                    {/* image */}
                    <div className='w-[200px] mx-auto flex justify-center items-center'>
                        <img className='rounded max-h-[200px] max-w-[300px] group-hover:scale-110 transition duration-300' src={image} alt={name} />
                    </div>
                </div>
                {/* buttons */}
                <div className='absolute top-6 -right-11 group-hover:right-5 bg-red-500/40 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all'>
                    <button onClick={() => addToCart(item, id)}>
                        <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
                            <BsPlus className='text-3x1'/>
                        </div>
                    </button>
                    <Link to={`/item/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'>
                        <BsEyeFill />
                    </Link>
                </div>
            </div>
            {/* category_id name price*/}
            <div>
                <Link to={`/category/${category_id}`}>
                <div className='text-sm capitalize text-gray-500 mb-1'>{category_id}</div>
                </Link>
                <Link to={`/item/${id}`}>
                <h2 className='font-semibold mb-1'>{name}</h2>
                </Link>
                <div className='font-semibold'>$ {price}</div>
            </div>
        </div>
    )
}

export default CardProduct;