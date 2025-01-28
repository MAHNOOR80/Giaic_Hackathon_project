'use client';

import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoCartOutline, IoMenu, IoClose } from 'react-icons/io5';
import { IoIosContact } from 'react-icons/io';
import Link from 'next/link';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';

function Navbar() {
  const item = useSelector((state: RootState) => state.cart);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/Home">
              <h1 className="text-gray-900 text-xl font-semibold md:text-2xl cursor-pointer">
                Avion
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 px-8">
            <div className="flex space-x-8">
              <Link href="/Home" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                About
              </Link>
              <Link href="/products" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                Products
              </Link>
              <div className="group relative">
                <button className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  Categories
                </button>
                <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-48 z-50">
                  <Link href="/TablePage" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Tables</Link>
                  <Link href="/Plantpotspage" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Plant pots</Link>
                  <Link href="/Ceramicspage" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Ceramics</Link>
                  <Link href="/Chairspage" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Chairs</Link>
                  <Link href="/Crockerypage" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Crockery</Link>
                  <Link href="/Tablewarepage" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Tableware</Link>
                  <Link href="/Cutlerypage" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Cutlery</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Icons Section - Visible on both mobile and desktop */}
          <div className="flex items-center space-x-4">
            <Link href={"/Search"}>
            <button className="p-2 hover:text-blue-500 transition-colors duration-200">
              <CiSearch size={25} />
            </button>
            </Link>
            
            <Link href="/Cart">
              <div className="relative p-2 hover:text-blue-500 transition-colors duration-200">
                <IoCartOutline size={25} />
                {item.length > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {item.length}
                  </span>
                )}
              </div>
            </Link>
            
            <Link href="/Userpage">
              <div className="p-2 hover:text-blue-500 transition-colors duration-200">
                <IoIosContact size={25} />
              </div>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 hover:text-blue-500 transition-colors duration-200"
            >
              {menuOpen ? <IoClose size={25} /> : <IoMenu size={25} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed top-16 left-0 right-0 bottom-0 bg-white md:hidden transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          <Link href="/Home" 
            className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link href="/about"
            className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link href="/products"
            className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>
          
          {/* Categories in mobile menu */}
          <div className="px-3 py-2">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Categories</h3>
            <div className="mt-2 space-y-1">
              <Link href="/TablePage" 
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                onClick={() => setMenuOpen(false)}
              >
                Tables
              </Link>
              <Link href="/Plantpotspage"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                onClick={() => setMenuOpen(false)}
              >
                Plant pots
              </Link>
              <Link href="/Ceramicspage"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                onClick={() => setMenuOpen(false)}
              >
                Ceramics
              </Link>
              <Link href="/Chairspage"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                onClick={() => setMenuOpen(false)}
              >
                Chairs
              </Link>
              <Link href="/Crockerypage"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                onClick={() => setMenuOpen(false)}
              >
                Crockery
              </Link>
              <Link href="/Tablewarepage"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                onClick={() => setMenuOpen(false)}
              >
                Tableware
              </Link>
              <Link href="/Cutlerypage"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                onClick={() => setMenuOpen(false)}
              >
                Cutlery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;