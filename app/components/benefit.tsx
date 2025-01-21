import React, { useState } from 'react';

const Benefit = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setSubmitted(true); // Update state to show the submitted message
  };

  return (
    <section className="py-16 bg-[#F9F9F9] text-[#2A254B] mt-6 ">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8 md:p-16 flex flex-col items-center">
        {/* Header Section */}
        <h1 className="text-3xl md:text-5xl font-bold text-center leading-tight">
          Join the Club and Enjoy Exclusive Benefits
        </h1>
        <p className="text-center mt-4 text-base md:text-lg text-gray-600">
          Subscribe to our newsletter for updates on new ranges, exclusive offers, 
          special sales, and pop-up store events.
        </p>

        {/* Conditional Rendering for Form or Success Message */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="mt-8 w-full flex flex-col md:flex-row items-center gap-4"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="p-4 w-full md:w-[70%] border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2A254B] text-gray-700"
            />
            <button
              type="submit"
              className="px-8 py-4 w-full md:w-auto bg-[#2A254B] text-white rounded-lg font-medium shadow-lg hover:bg-[#40356D] transition duration-300"
            >
              Sign Up
            </button>
          </form>
        ) : (
          <div className="mt-8 text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-[#2A254B]">
              Thank you for subscribing!
            </h2>
            <p className="text-gray-600 mt-2">
              You have successfully joined our newsletter.
            </p>
          </div>
        )}

        {/* Footer Section */}
        <p className="text-center text-sm mt-6 text-gray-500">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Benefit;
