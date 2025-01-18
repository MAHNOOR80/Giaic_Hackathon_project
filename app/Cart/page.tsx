/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from "react";
import Navbar from "../components/navbar";

const Cart = () => {
  // State to handle product quantities and total cost
  const [products, setProducts] = useState([
    { id: 1, name: "Graystone vase", price: 85, quantity: 1, image: "/images/Product Image.png" },
    { id: 2, name: "Basic white vase", price: 85, quantity: 1, image: "/images/Product Image 2.png" },
  ]);

  // Function to handle quantity change
  const handleQuantityChange = (id: number, change: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(1, product.quantity + change) }
          : product
      )
    );
  };

  // Calculate total cost
  const total = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

  // Handle Checkout
  const handleCheckout = () => {
    alert(`You have successfully checked out! Your total is £${total}.`);
  };

  return (
    <>
      <div className="bg-gray-200 w-full px-4 sm:px-10 lg:px-40 pt-10 pb-16 h-auto text-custom-purple">
        <h1 className="text-2xl sm:text-3xl text-center lg:text-left">Your Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-10">
          {/* Product Section */}
          <div className="border-2 p-4 space-y-8">
            {products.map((product) => (
              <div key={product.id} className="flex items-start justify-between">
                <div className="flex">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 sm:w-28 sm:h-28 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
                  />
                  <div className="ml-6">
                    <h1 className="text-base sm:text-lg font-medium">{product.name}</h1>
                    <p className="text-sm mt-2">A timeless ceramic vase with a tri-color grey glaze.</p>
                    <p className="mt-2 text-base font-semibold">£{product.price}</p>
                  </div>
                </div>

                {/* Quantity Section */}
                <div className="flex flex-col items-center">
                  <h1 className="text-sm font-semibold sm:hidden lg:block">Quantity</h1>
                  <div className="flex items-center mt-2">
                    <button
                      className="bg-custom-purple text-white rounded-full px-4 py-1 mr-2"
                      onClick={() => handleQuantityChange(product.id, -1)}
                    >
                      -
                    </button>
                    <p className="text-lg font-medium">{product.quantity}</p>
                    <button
                      className="bg-custom-purple text-white rounded-full px-4 py-1 ml-2"
                      onClick={() => handleQuantityChange(product.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total Section (Hidden on Small Screens) */}
          <div className="border-2 p-4 sm:hidden lg:block">
            <h1 className="text-lg font-semibold">Total</h1>
            <p className="mt-10 text-lg font-medium">£{total}</p>
            <p className="mt-40 text-lg font-medium">£{total}</p>
          </div>
        </div>

        {/* Subtotal Section */}
        <div className="mt-10 text-center lg:text-right">
          <h1 className="inline text-lg sm:text-xl font-medium mr-4">Subtotal</h1>
          <h1 className="inline text-xl sm:text-2xl font-semibold">£{total}</h1>
          <p className="text-sm mt-4">Taxes and shipping are calculated at checkout</p>
          <button
            className="bg-custom-purple h-12 sm:h-14 mt-6 w-full sm:w-56 rounded-sm text-white"
            onClick={handleCheckout} // Trigger checkout message on button click
          >
            Go to checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
