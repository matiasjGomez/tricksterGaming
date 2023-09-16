import React, { useEffect, useState, useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext'
import { CartContext } from '../contexts/CartContext';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom';

const NavBar = () => {

    //destructure categories
    const [isActive, setIsActive] = useState(false);
    const { isOpen, setIsOpen } = useContext(SidebarContext);
    const { itemAmount } = useContext(CartContext);
    //event listener
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
        });
    });

    return (
        <header
          className={`${
            isActive ? 'bg-white py-4 shadow-md glow bg-gradient-to-r from-red-500' : 'bg-none py-6'
          } fixed w-full z-10 transition-all border border-b-red-500`}
        >
<nav>
  <div className='container mx-auto flex items-center justify-between h-full'>
    {/* logo */}
    <Link to={'/'}>
      <div>
        <img className='w-[90px] h-[40px]' src={logo} alt='' />
      </div>
    </Link>
    
    {/* Nav links */}
    <ul className='flex space-x-4 text-xl text-white'>
      <li className='hover:text-red-500'>
        <Link to='/'>Home</Link>
      </li>
      <li className='hover:text-red-500'>
        <Link to='category/Nintendo Switch'>Nintendo Switch</Link>
      </li>
      <li className='hover:text-red-500'>
        <Link to='category/PlayStation 4'>PlayStation 4</Link>
      </li>
      <li className='hover:text-red-500'>
        <Link to='category/Playstation 5'>PlayStation 5</Link>
      </li>
      <li className='hover:text-red-500'>
        <Link to='category/Xbox Series X'>Xbox Series X</Link>
      </li>
    </ul>

    {/* Cart */}
    <div
      onClick={() => setIsOpen(!isOpen)}
      className='cursor-pointer flex relative'
    >
      <AiOutlineShoppingCart className='text-2xl' />
      <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
        {itemAmount}
      </div>
    </div>
  </div>
</nav>
        </header>
      );
    };

export default NavBar;