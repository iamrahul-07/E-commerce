import React from 'react'
import logo from '../../assets/logo.png'
import { GoSearch } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import Darkmode from '../Darkmode/Darkmode';

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Electronics",
    link: "/#",
  },
];

const Navbar = () => {
  return (
    <div className='shadow-md bg-white relative z-40'>
       {/* Upper navbar */}
       <div className='bg-yellow-400/40 py-2'>
        <div className='p-4 flex justify-between items-center'>
            <div className=''>
                <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2'>
                    <img src={logo} alt="Logo" className='w-10'/>
                    Shopsy
                </a>
            </div>
            {/* Search bar and order button */}
            <div className='flex justify-between items-center gap-4'>
                <div className='relative hidden sm:block'>
                    <input type="text" placeholder='Search...' className='w-3xs border border-gray-300 hover:w-80 focus:outline-none focus:border-1 focus:border-orange-400 rounded-full transition-all duration-300 px-4 py-2 bg-white'/>
                    <GoSearch className="text-gray-500 text-xl hover:text-orange-400 absolute top-1/2 -translate-y-1/2 right-3" />
                </div>
                <button className="bg-gradient-to-r from-orange-400 to-orange-500 transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3">
                    <span className='hover:block hidden transition-all duration-300'>Order</span>
                    <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer"/>
                </button>
                {/* DarkMode */}
                <div>
                    <Darkmode/>
                </div>
            </div>
        </div>
       </div>
       {/* Lower Navbar */}
       <div className='flex justify-center'>
        <ul className='sm:flex hidden items-center gap-4'>
            {Menu.map((item)=>(
            <li key={item.id}>
                <a href={item.link} className="inline-block px-4 hover:text-orange-400 duration-200">{item.name}</a>
            </li>
        ))}
        {/* Dropdown Links */}
        <li className='relative cursor-pointer'>
            <a href="">Trending</a>
        </li>
        </ul>
        
       </div>
    </div>
  )
}

export default Navbar