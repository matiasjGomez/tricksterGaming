import React from 'react';
import Legends from '../img/hero_link_1.png'
import { Link } from 'react-router-dom'

const Hero = () => {

  return (
    <section className='h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className='container mx-auto flex justify-around h-full'>
        {/* text */}
        <div className='flex flex-col justify-center'>
          {/* pretitle */}
          <div className='font-semibold flex items-center uppercase text-white'>
            <div className='w-10 h-[2px] bg-red-500 mr-3 '></div>Start Your Adventure
          </div>
          {/* title */}
          <h1 className='text-[70px] leading-[1.1] font-light mb-4 text-white'>
            Gamers Republic <br />
            <span className='font-semibold'>Trickster Gaming</span>
          </h1>
        </div>
        {/* image */}
        <div className='hidden lg:block '>
          <img className='object-cover' src={Legends} alt='Link Hero' />
        </div>
      </div>
    </section>
  );
};

export default Hero;