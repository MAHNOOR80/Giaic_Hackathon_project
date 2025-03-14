"use client";
import React, { useEffect, useState } from "react";
import Hero from "./components/hero";
import Brand from "./components/brand";
import Ceramics from "./components/ceramics";
import Benefit from "./components/benefit";
import Touch from "./components/touch";
import { sanityfetch } from "@/sanity/lib/fetch";
import { fourproducts } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";

type Product = {
  _id: string;
  category: string;
  name: string;
  slug: {
    current: string;
    _type: string;
  };
  imageUrl: string;
  price: number;
  quantity: number;
  tags: string | string[];
  description: string;
  features: string;
  dimensions: {
    depth: number;
    width: number;
    height: number;
  };
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await sanityfetch({ query: fourproducts });
      setProducts(products);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // You can return a loading state while data is being fetched
  }

  return (
    <div>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Brand Section */}
      <Brand />

      {/* 3. Ceramics Section */}
      <Ceramics />

      {/* 4. Product Listing Section */}
      <div className="px-8 py-12 bg-gray-50">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Explore Our Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="border p-4 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 flex flex-col items-center transform hover:scale-105"
            >
              {/* Product Image */}
              <div className="w-60 h-60 overflow-hidden rounded-md mb-4">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={240}
                  height={240}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Product Name */}
              <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                {product.name}
              </h2>

              {/* Product Description */}
              <p className="text-gray-600 text-sm mb-4 text-center">
                {product.description.length > 60
                  ? product.description.slice(0, 60) + "..."
                  : product.description}
              </p>

              {/* Product Price */}
              <p className="text-lg font-medium text-gray-700 mb-2">
                Price:{" "}
                <span className="text-green-600 font-bold">
                  ${product.price}
                </span>
              </p>

              {/* Product Quantity */}
              <p className="text-sm text-gray-500 mb-4">
                Available Quantity:{" "}
                <span className="font-medium">{product.quantity}</span>
              </p>

              {/* Buttons */}
              <div className="flex space-x-4 mt-auto">
                <Link
                  href={`/products/${product.slug.current}`}
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                >
                  View Detail
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Link href={"/products"}>
        <div className="flex justify-center mt-8">
          <button
            className="bg-[#F9F9F9] text-[#2A254B] py-3 px-8 rounded-lg font-medium text-lg transition-colnpm cache clean --forceors duration-300 ease-in-out hover:bg-[#2A254B] hover:text-white"
          >
            View All Products
          </button>
        </div>
      </Link>

      {/* 5. Benefit Section */}
      <Benefit />

      {/* 6. Touch Section */}
      <Touch />
    </div>
  );
}
