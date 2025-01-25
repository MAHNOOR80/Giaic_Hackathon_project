import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className="pt-20 md:pt-24"> {/* Added padding top here */}
      <div className="px-6 md:px-16 py-16 bg-white">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          {/* Text Section */}
          <div className="w-full md:w-[60%] h-auto md:h-[580px] bg-[#2A254B] text-white px-4 md:px-12 py-6 md:py-12 flex flex-col justify-between rounded-xl shadow-lg">
            <div>
              <h1 className="text-2xl md:text-4xl font-semibold tracking-tight leading-tight md:leading-normal">
                The Furniture Brand for the Future, with Timeless Designs
              </h1>
              <div className="flex justify-center md:justify-start mt-8">
                <button className="w-[180px] h-[56px] bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-500 text-white font-bold rounded-lg shadow-lg transition duration-300">
                  View Collection
                </button>
              </div>
            </div>
            <div className="my-4 md:my-0">
              <p className="text-sm md:text-lg leading-relaxed opacity-80">
                A new era in eco-friendly furniture with Avion, the French luxury retail brand known for its exquisite craftsmanship, sustainable materials, and innovative designs...
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-[40%] h-[560px] mt-8 md:mt-0">
            <Image
              src={'/images/chair.png'}
              alt="Furniture Image"
              layout="responsive"
              objectFit="cover"
              width={700}
              height={700}
              className="rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;