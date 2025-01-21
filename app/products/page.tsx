"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/cartslice";
import Image from "next/image";
import { client } from "@/sanity/lib/client"; // Import Sanity client

interface Product {
  dimensions: any;
  _id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
  slug: {
    current: string;
    _type: string;
    dimensions: {
      depth: number;
      width: number;
      height: number;
    };
    features: string;
    tags: string | string[];
  };
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [notification, setNotification] = useState<string | null>(null);
  const dispatch = useDispatch();

  // Fetch Products from Sanity
  const getProducts = async () => {
    try {
      const query = `*[_type == "product"]{
        _id,
        name,
        "image": image.asset->url,
        price,
        quantity,
        slug,
        dimensions,
      }`;
      const products = await client.fetch(query);
      setProducts(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Handle adding product to cart
  const handleAdd = (product: Product) => {
    dispatch(add(product));
    setNotification(`${product.name} added to the cart!`);
    setTimeout(() => setNotification(null), 3000); // Clear notification after 3 seconds
  };

  // Fetch products on component mount
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="relative">
      {/* Notification Banner */}
      {notification && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-md shadow-xl z-50">
          {notification}{" "}
          <Link
            href="/Cart"
            className="underline ml-2 text-white font-bold hover:text-gray-200"
          >
            View Cart
          </Link>
        </div>
      )}

      {/* Product Grid */}
      <div className="gap-8 grid lg:grid-cols-3 sm:grid-cols-2 p-12">
        {products.map((product) => (
          <div
            key={product._id}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <Link href={`/products/${product.slug?.current}`}>
              <div className="w-full h-[300px] flex justify-center items-center bg-gray-100 rounded-t-lg overflow-hidden group">
                <Image
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                  src={product.image}
                  alt={product.name}
                  height={300}
                  width={300}
                />
              </div>
            </Link>
            <div className="px-6 pb-6 pt-4">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {product.name}
              </h5>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                A timeless design, with premium materials features as one of...
              </p>
              <p className="text-gray-800 dark:text-gray-300 text-sm mt-2">
                <strong>Dimensions:</strong>{" "}
                {product.dimensions.width}cm (W) x {product.dimensions.height}cm (H) x {product.dimensions.depth}cm (D)
              </p>
              <p className="text-gray-800 dark:text-gray-300 text-sm mt-2">
                <strong>Available Quantity:</strong> {product.quantity}
              </p>
              <div className="flex items-center mt-4">
                <span className="text-2xl font-semibold text-gray-900 dark:text-white">
                  ${product.price}
                </span>
              </div>
              <div className="flex justify-between items-center mt-5">
                <button
                  onClick={() => handleAdd(product)}
                  className="bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 text-center transition-all duration-200 transform hover:scale-105"
                >
                  Add to Cart
                </button>
                <Link
                  href={`/products/${product.slug?.current}`}
                  className="bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-3 text-center transition-all duration-200"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-6 right-6">
        <Link
          href="/Cart"
          className="bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300"
        >
          View Cart
        </Link>
      </div>
    </div>
  );
};

export default Products;
