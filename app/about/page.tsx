/* eslint-disable @next/next/no-img-element */
import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 pt-20 md:pt-24"> {/* Added padding top here */}
      {/* Hero Section */}
      <div className="w-full h-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-16 py-12 bg-white shadow-lg">
        <div className="md:w-2/4 text-xl md:text-2xl text-center md:text-left text-custom-purple">
          A brand built on the love of craftsmanship, quality, and outstanding customer service
        </div>
        <div className="mt-6 md:mt-0">
          <button className="bg-custom-purple hover:bg-purple-700 text-white h-12 w-40 rounded-sm shadow-md transition duration-300 ease-in-out">
            View our products
          </button>
        </div>
      </div>

      {/* Story Section */}
      <div className="flex flex-col md:flex-row w-full h-auto items-center justify-around px-4 py-16 bg-gray-100">
        <div className="bg-custom-purple w-full md:w-2/5 text-white p-8 md:p-16 mb-8 md:mb-0 rounded-lg shadow-lg">
          <h1 className="text-xl md:text-2xl font-semibold">It started with a small idea</h1>
          <p className="mt-6 text-lg">
            A global brand with local beginnings, our story began in a small studio in South London in early 2014.
          </p>
          <button className="bg-input-bg h-12 w-40 rounded-sm mt-10 text-white shadow-md hover:bg-purple-700 transition duration-300 ease-in-out">
            View Collection
          </button>
        </div>
        <div className="w-full md:w-2/5">
          <img
            src="/images/About main.png"
            alt="About main"
            className="w-full rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1 shadow-lg"
          />
        </div>
      </div>

      {/* Service Section */}
      <div className="flex flex-col md:flex-row w-full h-auto items-center px-4 py-16 bg-white space-y-8 md:space-y-0">
        <img
          src="/images/About second.png"
          alt="Service"
          className="w-full md:w-2/5 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1 shadow-lg"
        />
        <div className="border-2 bg-slate-200 w-full md:w-3/5 p-8 md:p-20 rounded-lg shadow-lg">
          <h1 className="text-xl md:text-2xl text-custom-purple font-semibold">
            Our service isn’t just personal, it’s actually hyper-personally exquisite
          </h1>
          <p className="text-custom-purple mt-6 text-lg">
            When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the
            mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so
            our Chelsea boutique became the hotbed for the London interior design community.
          </p>
          <button className="bg-white text-custom-purple hover:bg-custom-purple hover:text-white h-12 w-40 rounded-sm mt-10 text-lg shadow-md transition duration-300 ease-in-out">
            Get in Touch
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full h-auto pb-16 bg-gray-100">
        <h1 className="text-center text-custom-purple text-2xl font-semibold">What makes our brand different</h1>
        <div className="flex flex-wrap justify-center md:justify-evenly px-4 py-10 gap-8">
          {[ 
            { img: "/images/Delivery.png", title: "Next day as standard", desc: "Order before 3pm and get your order the next day as standard" },
            { img: "/images/check.png", title: "Made by true artisans", desc: "Handmade crafted goods made with real passion and craftsmanship" },
            { img: "/images/Purchase.png", title: "Unbeatable prices", desc: "For our materials and quality you won’t find better prices anywhere" },
            { img: "/images/Sprout.png", title: "Recycled packaging", desc: "We use 100% recycled materials to ensure our footprint is more manageable" },
          ].map((item, index) => (
            <div key={index} className="bg-gray-200 w-72 h-auto rounded-sm px-6 py-8 text-center shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1">
              <img src={item.img} alt={item.title} className="mx-auto mb-4" />
              <h1 className="text-custom-purple text-lg font-semibold">{item.title}</h1>
              <p className="text-custom-purple mt-4 text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="w-full h-auto bg-gray-100 py-8">
        <div className="m-auto w-11/12 bg-white p-8 md:p-16 rounded-lg shadow-lg">
          <h1 className="text-custom-purple text-2xl md:text-3xl text-center font-semibold">Join the club and get the benefits</h1>
          <p className="text-custom-purple text-center mt-6 text-sm md:text-base">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0">
            <input
              type="text"
              placeholder="you@gmail.com"
              className="bg-gray-100 w-80 h-12 p-5 rounded-sm shadow-md focus:outline-none focus:ring-2 focus:ring-custom-purple"
            />
            <button className="bg-custom-purple hover:bg-purple-700 h-12 w-32 rounded-sm text-white shadow-md mt-4 md:mt-0 transition duration-300 ease-in-out">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;