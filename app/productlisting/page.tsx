import Image from 'next/image';
import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import { MdOutlinePriceChange } from "react-icons/md";

const ProductListing = () => {
  const features = [
    {
      title: 'Next day as standard',
      description: 'Order before 3pm and get your order the next day as standard.',
      icon: TbTruckDelivery,
    },
    {
      title: 'Made by true artisans',
      description: 'Hand-crafted goods made with real passion and craftsmanship.',
      icon: IoIosCheckmarkCircleOutline,
    },
    {
      title: 'Unbeatable prices',
      description: 'For our material and quality, you won’t find better prices anywhere.',
      icon: MdOutlinePriceChange,
    },
    {
      title: 'Recycled packaging',
      description: 'We use 100% recycled packaging to ensure our footprint is manageable.',
      icon: LuSprout,
    },
  ];

  return (
    <>
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-8">

          {/* Main Product Section */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            <div className="w-full md:w-1/2">
              <Image
                src={'/images/Image Left.png'}
                height={800}
                width={800}
                alt="chair"
                className="w-full h-auto object-cover rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 md:px-10 py-6">
              <div className="mb-4">
                <p className="text-xl md:text-2xl font-semibold text-[#2A254B]">The Dandy Chair</p>
                <p className="text-lg md:text-xl font-semibold text-[#2A254B] mt-2">$250</p>
              </div>
              <div className="text-[#505977] text-sm md:text-base">
                <h1 className="font-semibold text-[#2A254B]">Description</h1>
                <p className="my-4">
                  A timeless design, with premium materials, features as one of our most popular
                  and iconic pieces. The Dandy Chair is perfect for any stylish living space with
                  beech legs and lambskin leather upholstery.
                </p>
                <ul className="list-disc space-y-1 ml-4 text-sm md:text-base">
                  <li>Premium material</li>
                  <li>Handmade upholstery</li>
                  <li>Quality timeless classic</li>
                </ul>

                <div className="my-8">
                  <h1 className="font-semibold text-[#2A254B]">Dimensions</h1>
                  <div className="flex gap-8 md:gap-16 mt-4 text-sm md:text-base">
                    <div>
                      <h2 className="font-semibold text-[#2A254B]">Height</h2>
                      <p>110cm</p>
                    </div>
                    <div>
                      <h2 className="font-semibold text-[#2A254B]">Width</h2>
                      <p>75cm</p>
                    </div>
                    <div>
                      <h2 className="font-semibold text-[#2A254B]">Depth</h2>
                      <p>50cm</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-8">
                  <div className="flex items-center gap-4">
                    <h1 className="text-[#2A254B]">Amount:</h1>
                    <button className="flex items-center gap-2 bg-[#F5F5F5] rounded-md px-4 py-2 text-[#2A254B]">
                      <span>+</span> 1 <span>-</span>
                    </button>
                  </div>
                  <button className="w-full md:w-[146px] h-[56px] bg-[#2A254B] text-white mt-4 md:mt-0 rounded-lg text-sm md:text-base font-semibold hover:bg-[#3b2a5e] transition duration-300">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Suggestions Section */}
          {/* <h1 className="text-xl md:text-2xl font-semibold mt-12 text-[#505977]">You might also like</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {['chair', 'vase', 'silky', 'lamp'].map((item, idx) => (
              <div key={idx} className="group w-full">
                <Image
                  src={`/images/${item}.png`}
                  height={700}
                  width={700}
                  alt={item}
                  className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="mt-4 text-[#2A254B]">
                  <p className="py-2">{item === 'chair' ? 'The Dandy Chair' : `The ${item}`}</p>
                  <p className="font-semibold">${item === 'chair' ? 250 : item === 'vase' ? 155 : 125}</p>
                </div>
              </div>
            ))}
          </div> */}

          {/* View Collection Button */}
          <div className="my-10 text-center">
            <button className="bg-[#F9F9F9] py-3 px-6 rounded-md text-[#2A254B] font-semibold text-lg hover:bg-[#2A254B] hover:text-white transition duration-300">
              View collection
            </button>
          </div>

          {/* Features Section */}
          <h2 className="text-xl md:text-2xl font-semibold mt-12 text-[#505977]">Why choose us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <Icon size={30} className="text-[#2A254B]" />
                  <p className="py-4 font-semibold text-[#2A254B]">{feature.title}</p>
                  <p className="text-center text-sm md:text-base text-[#505977]">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductListing;

