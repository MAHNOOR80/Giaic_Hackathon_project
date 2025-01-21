'use client';

import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoCartOutline, IoMenu, IoClose } from 'react-icons/io5';
import { IoIosContact } from 'react-icons/io';
import Link from 'next/link';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';

function Navbar() {

  const  item = useSelector((state:RootState)=>state.cart)

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="p-4 w-full bg-white shadow-md transition-all ease-in-out duration-300">
      {/* Top Section */}
      <div className="flex justify-between items-center py-2">
        {/* Search Icon for Large Screens */}
        <div className="hidden md:block">
          <CiSearch size={25} className="text-gray-700 cursor-pointer hover:text-blue-500 transition-all duration-300" />
        </div>

        {/* Logo */}
        <h1 className="text-gray-900 text-xl font-semibold md:text-2xl">
          Avion
        </h1>

        {/* Cart and Contact Icons for Large Screens */}
        <div className="hidden md:flex gap-6">
          <Link href="/Cart">
            <IoCartOutline size={25} className="text-gray-700 cursor-pointer hover:text-blue-500 transition-all duration-300" />
          </Link>
          {item.length}
          <Link href={"/Userpage"}><IoIosContact size={25} className="text-gray-700 cursor-pointer hover:text-blue-500 transition-all duration-300" /></Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="flex items-center gap-4 md:hidden">
          <CiSearch size={25} className="text-gray-700 cursor-pointer hover:text-blue-500 transition-all duration-300" />
          <button
            className="text-2xl focus:outline-none z-30 transition-all duration-300"
            onClick={toggleMenu}
          >
            {menuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-2 border-gray-300" />

      {/* Mobile Navigation Links */}
      <header
        className={`h-full w-full bg-white shadow-lg transition-transform duration-300 ease-in-out z-20 md:static md:w-auto md:translate-x-0 md:bg-transparent md:shadow-none ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Close Button in Mobile Menu */}
        {menuOpen && (
          <div className="flex justify-end p-4 md:hidden">
            <button
              className="text-2xl focus:outline-none hover:text-blue-500 transition-all duration-300"
              onClick={toggleMenu}
            >
              <IoClose />
            </button>
          </div>
        )}

        <ul className="flex flex-col md:flex-row justify-center items-start md:items-center gap-6 md:gap-8 text-gray-600 text-base p-6 md:p-0">
          

          <li>

          <Link href="/Home" className="hover:text-gray-900 transition-colors duration-200 transform hover:scale-105 mr-5">
              Home
            </Link>

            <Link href="/about" className="hover:text-gray-900 transition-colors duration-200 transform hover:scale-105 mr-5">
              About
            </Link>

            
            
            <Link href="/products" className="hover:text-gray-900 transition-colors duration-200 ml-4 transform hover:scale-105">
              Products
            </Link>
          </li>

          <Link href={"/TablePage"}>Tables</Link>
          <Link href={"/Plantpotspage"}>Plant pots</Link>
          <Link href={"/Ceramicspage"}>Ceramics</Link>
          <Link href={"/TablePage"}>Tables</Link>
          <Link href={"/Chairspage"}>Chairs</Link>
          <Link href={"/Crockerypage"}>Crockery</Link>
          <Link href={"/Tablewarepage"}>Tableware</Link>
          <Link href={"/Cutlerypage"}>Cutlery</Link>
        </ul>
      </header>
    </nav>
  );
}

export default Navbar;
