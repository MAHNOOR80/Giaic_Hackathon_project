'use client'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation';

const Product = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/productlisting'); // Navigates to the "/productlisting" page
  };

  return (
    <section>
      <div className='px-8 py-12 text-[#2A254B] mt-12'>
        <h1 className='text-3xl font-semibold text-center md:text-left'>Our Popular Products</h1>

        {/* Flexbox layout: stack on small screens, side by side on medium and large screens */}
        <div className='flex flex-col md:flex-row gap-8 mt-8 justify-center md:justify-start'>

          {/* Product 1 */}
          <div className='w-full md:w-[700px] h-auto group rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105'>
            <Image
              src={'/images/Large.png'}
              height={800}
              width={800}
              alt='suede sofa'
              className='w-full h-[80%] object-cover'
            />
            <div className='mt-4 text-[#2A254B] px-4'>
              <p className='py-2 font-semibold text-lg'>The Popular Suede Sofa</p>
              <p className='font-semibold text-xl'>$980</p>
            </div>
          </div>

          {/* Product 2 */}
          <div className='w-full md:w-[350px] h-auto group rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105'>
            <Image
              src={'/images/chair.png'}
              height={800}
              width={800}
              alt='chair'
              className='w-full h-[80%] object-cover'
            />
            <div className='mt-4 text-[#2A254B] px-4'>
              <p className='py-2 font-semibold text-lg'>The Dandy Chair</p>
              <p className='font-semibold text-xl'>$250</p>
            </div>
          </div>

          {/* Product 3 */}
          <div className='w-full md:w-[350px] h-auto group rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105'>
            <Image
              src={'/images/chair1.png'}
              height={900}
              width={900}
              alt='chair'
              className='w-full h-[80%] object-cover'
            />
            <div className='mt-4 text-[#2A254B] px-4'>
              <p className='py-2 font-semibold text-lg'>The Dandy Chair</p>
              <p className='font-semibold text-xl'>$250</p>
            </div>
          </div>

        </div>

        {/* View Collection Button */}
        <div className='my-10 flex justify-center'>
          <button className='bg-[#F9F9F9] py-4 px-8 rounded-[5px] text-[#2A254B] font-semibold text-lg hover:bg-[#2A254B] hover:text-white transition duration-300 ease-in-out shadow-md'>
            View Products
          </button>
        </div>
      </div>
    </section>
  )
}

export default Product;

