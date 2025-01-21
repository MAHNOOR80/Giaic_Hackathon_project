'use client'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Product = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/products'); // Navigates to the "/productlisting" page
  };

  return (
    <>
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-8 text-gray-800">
          <h1 className="text-3xl font-semibold text-center mb-12">Our Popular Products</h1>

          {/* Flexbox layout: stack on small screens, side by side on medium and large screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

            {/* Product 1 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <Image
                src={'/images/Large.png'}
                height={800}
                width={800}
                alt="Suede Sofa"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent p-6">
                <p className="text-lg font-semibold text-white">The Popular Suede Sofa</p>
                <p className="text-xl font-bold text-white mt-2">$980</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <Image
                src={'/images/chair.png'}
                height={800}
                width={800}
                alt="Dandy Chair"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent p-6">
                <p className="text-lg font-semibold text-white">The Dandy Chair</p>
                <p className="text-xl font-bold text-white mt-2">$250</p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <Image
                src={'/images/chair1.png'}
                height={900}
                width={900}
                alt="Dandy Chair"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent p-6">
                <p className="text-lg font-semibold text-white">The Dandy Chair</p>
                <p className="text-xl font-bold text-white mt-2">$250</p>
              </div>
            </div>

          </div>

          {/* View Collection Button */}
          <div className="my-16 text-center">
           <Link href={"/products"}>
           <button
              className="bg-[#F9F9F9] text-[#2A254B] py-3 px-8 rounded-lg font-medium text-lg transition-colors duration-300 ease-in-out hover:bg-[#2A254B] hover:text-white"
              onClick={handleNavigation}
            >
              View All Products
            </button>
           </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
