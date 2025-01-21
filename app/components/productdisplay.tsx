"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/cartslice";

interface Product  {
    _id: string;
    category: string;
    name: string;
    slug: {
      current: string;
      _type: string;
    };
    image: string;
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
  

const Products:React.FC=()=>{
    const [products,setProducts]=useState<Product[]>([]);
    const dispatch = useDispatch()

    // fetch product from api 
    const getProducts = async ()=>{
      try {
        const response = await fetch(
          "https://hackathon-apis.vercel.app/api/products",
          {
            next: { revalidate: 60 }, // Optional caching for Next.js
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    // handling product to cart

    const handleAdd = (product:Product)=>{
      dispatch(add(product));
    };

    // fetch products on component mount

    useEffect(()=>{
      getProducts();
    },[]);

    return (
        <div>
    
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
                src={product.image}
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
                ? `${product.description.slice(0, 60)}...`
                : product.description}
            </p>
    
            {/* Product Price */}
            <p className="text-lg font-medium text-gray-700 mb-2">
              Price:{" "}
              <span className="text-green-600 font-bold">${product.price}</span>
            </p>
    
            {/* Product Quantity */}
            <p className="text-sm text-gray-500 mb-4">
              Available Quantity:{" "}
              <span className="font-medium">{product.quantity}</span>
            </p>
    
            {/* Buttons */}
            <div className="flex space-x-4 mt-auto">
              <button onClick={() => handleAdd(product)} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Add to Cart
              </button>
              <Link
                href={`/products/${product.slug?.current}`}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                View Detail
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
      );
  }


  export default Products



