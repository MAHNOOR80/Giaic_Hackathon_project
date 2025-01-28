import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Ceramics = () => {
  return (
    <>
      <section>
        <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">
          {/* Title */}
          <h1 className="text-3xl font-semibold text-center md:text-left mb-12">New Ceramics</h1>

          {/* Product Items */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-8">

            {/* Product 1 */}
            <div className="w-full h-auto group rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-y-2">
              <Image
                src={'/images/chair.png'}
                height={700}
                width={700}
                alt="chair"
                className="w-full h-auto max-h-[300px] object-contain" // Adjust height here
              />
              <div className="mt-4 text-[#2A254B] px-4 pb-4">
                <p className="text-lg font-semibold">The Dandy Chair</p>
                <p className="text-md">$250</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="w-full h-auto group rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-y-2">
              <Image
                src={'/images/vase.png'}
                height={700}
                width={700}
                alt="vase"
                className="w-full h-auto max-h-[300px] object-contain" // Adjust height here
              />
              <div className="mt-4 text-[#2A254B] px-4 pb-4">
                <p className="text-lg font-semibold">Rustic Vase Set</p>
                <p className="text-md">$155</p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="w-full h-auto group rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-y-2">
              <Image
                src={'/images/silky.png'}
                height={700}
                width={700}
                alt="silky vase"
                className="w-full h-auto max-h-[300px] object-contain" // Adjust height here
              />
              <div className="mt-4 text-[#2A254B] px-4 pb-4">
                <p className="text-lg font-semibold">The Silky Vase</p>
                <p className="text-md">$125</p>
              </div>
            </div>

            {/* Product 4 */}
            <div className="w-full h-auto group rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-y-2">
              <Image
                src={'/images/lamp.png'}
                height={700}
                width={700}
                alt="lamp"
                className="w-full h-auto max-h-[300px] object-contain" // Adjust height here
              />
              <div className="mt-4 text-[#2A254B] px-4 pb-4">
                <p className="text-lg font-semibold">The Lucky Lamp</p>
                <p className="text-md">$399</p>
              </div>
            </div>

          </div>

          {/* View Collection Button */}
          <div className="my-10 flex justify-center items-center">
            <Link href={"/products"}>
              <div className="flex justify-center mt-8">
                <button
                  className="bg-[#F9F9F9] text-[#2A254B] py-3 px-8 rounded-lg font-medium text-lg transition-colors duration-300 ease-in-out hover:bg-[#2A254B] hover:text-white"
                >
                  View All Products
                </button>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ceramics;