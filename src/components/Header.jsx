import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import image from '../assets/img/logo.png'

const Header = () => {




  const [toggle, setToggle] = useState(false);




  return (
    <div className='bg-[#d63737] p-4'>
      <div className='max-w[1240px] py-[16px] items-center justify-between flex mx-auto'>
      <div className=' text-3xl font-bold'>
      <img src={image} className='w-[112px]' />
      </div>
      {
        toggle ? <AiOutlineClose onClick={() => setToggle(!toggle)} className=' text-white text-2xl  md:hidden block' /> : <AiOutlineMenu onClick={() => setToggle(!toggle)} className=' text-white text-2xl  md:hidden block' />
      }
      
      
        <ul className=' hidden md:flex text-white gap-8'>
            <li className='hover:text-black transitioN ease-in duration-700 hover:duration:700'><a href="">Home</a></li>
            <li className='hover:text-black transitioN ease-in duration-700 hover:duration:700'><a href="">Company</a></li>
            <li className='hover:text-black transitioN ease-in duration-700 hover:duration:700'><a href="">Resources</a></li>
            <li className='hover:text-black transitioN ease-in duration-700 hover:duration:700'><a href="">About</a></li>
            <li className='hover:text-black transitioN ease-in duration-700 hover:duration:700'><a href="">Contact</a></li>
        </ul>
        {/* Responsive menu */}
        <ul className={` duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[92px] ${toggle ? 'left-[0]' : 'left-[-100%]'}
        `}>
            <li className=' p-5'>Home</li>
            <li className=' p-5'>Company</li>
            <li className=' p-5'>Resources</li>
            <li className=' p-5'>About</li>
            <li className=' p-5'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
