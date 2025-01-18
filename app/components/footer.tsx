import Link from 'next/link';
import React from 'react';
import {
  FaLinkedin,
  FaInstagram,
  FaFacebookSquare,
  FaTwitter,
  FaPinterest,
} from 'react-icons/fa';
import { IoLogoSkype } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className="bg-[#2A254B] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 overflow-hidden">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Menu Section */}
          <div>
            <h2 className="text-lg md:text-xl font-bold mb-4">Menu</h2>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/">New Arrivals</Link>
              </li>
              <li>
                <Link href="/">Best Sellers</Link>
              </li>
              <li>
                <Link href="/">Recently Viewed</Link>
              </li>
              <li>
                <Link href="/">Popular This Week</Link>
              </li>
              <li>
                <Link href="/">All Products</Link>
              </li>
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <h2 className="text-lg md:text-xl font-bold mb-4">Categories</h2>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/">Crockery</Link>
              </li>
              <li>
                <Link href="/">Furniture</Link>
              </li>
              <li>
                <Link href="/">Homeware</Link>
              </li>
              <li>
                <Link href="/">Plant Pots</Link>
              </li>
              <li>
                <Link href="/">Chairs</Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h2 className="text-lg md:text-xl font-bold mb-4">Our Company</h2>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/">Vacancies</Link>
              </li>
              <li>
                <Link href="/">Contact Us</Link>
              </li>
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/">Return Policy</Link>
              </li>
            </ul>
          </div>

          {/* Mailing List Section */}
          <div>
            <h2 className="text-lg md:text-xl font-bold mb-4">Join Our Mailing List</h2>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex flex-col sm:flex-row items-center gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full sm:w-auto h-[48px] p-4 bg-[#4E4D93] text-white rounded-md focus:outline-none"
              />
              <button
                type="submit"
                className="w-full sm:w-auto h-[48px] bg-white text-[#2A254B] font-semibold px-6 rounded-md hover:bg-gray-100 transition">
                Sign Up
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-12 border-[#4E4D93]" />

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-400">© 2022 Avion LTD. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/">
              <FaLinkedin size={24} className="hover:text-gray-300 transition" />
            </Link>
            <Link href="/">
              <FaFacebookSquare size={24} className="hover:text-gray-300 transition" />
            </Link>
            <Link href="/">
              <FaInstagram size={24} className="hover:text-gray-300 transition" />
            </Link>
            <Link href="/">
              <IoLogoSkype size={24} className="hover:text-gray-300 transition" />
            </Link>
            <Link href="/">
              <FaTwitter size={24} className="hover:text-gray-300 transition" />
            </Link>
            <Link href="/">
              <FaPinterest size={24} className="hover:text-gray-300 transition" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
