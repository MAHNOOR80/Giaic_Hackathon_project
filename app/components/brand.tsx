import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { LuSprout } from 'react-icons/lu';
import { MdOutlinePriceChange } from 'react-icons/md';

const Brand = () => {
  return (
    <section className="py-16 bg-[#F9F9F9] text-[#2A254B]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Title */}
        <h1 className="text-center text-2xl md:text-4xl font-bold">
          What Makes Our Brand Different
        </h1>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6 transition-transform duration-300 hover:scale-105">
            <TbTruckDelivery size={40} className="text-[#2A254B] mb-4" />
            <h2 className="font-semibold text-lg md:text-xl">
              Next Day as Standard
            </h2>
            <p className="text-gray-600 mt-2">
              Order before 3pm and get your order the next day as standard.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6 transition-transform duration-300 hover:scale-105">
            <IoIosCheckmarkCircleOutline size={40} className="text-[#2A254B] mb-4" />
            <h2 className="font-semibold text-lg md:text-xl">
              Made by True Artisans
            </h2>
            <p className="text-gray-600 mt-2">
              Hand-crafted goods made with real passion and craftsmanship.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6 transition-transform duration-300 hover:scale-105">
            <MdOutlinePriceChange size={40} className="text-[#2A254B] mb-4" />
            <h2 className="font-semibold text-lg md:text-xl">
              Unbeatable Prices
            </h2>
            <p className="text-gray-600 mt-2">
              For our material and quality, you won't find better prices anywhere.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6 transition-transform duration-300 hover:scale-105">
            <LuSprout size={40} className="text-[#2A254B] mb-4" />
            <h2 className="font-semibold text-lg md:text-xl">
              Recycled Packaging
            </h2>
            <p className="text-gray-600 mt-2">
              We use 100% recycled packaging to ensure our footprint is manageable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
