"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/cartslice";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { RootState } from "../redux/store";
import { addToWishlist, removeFromWishlist } from "../redux/wishlistslice";

// Define Product interface
interface Product {
  _id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
  slug: {
    current: string;
  };
  dimensions: {
    depth: number;
    width: number;
    height: number;
  };
  description?: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartNotification, setCartNotification] = useState<string | null>(null);
  const [wishlistNotification, setWishlistNotification] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const dispatch = useDispatch();
  const wishlist = useSelector((state: RootState) => state.wishlist.items);

  // Fetch Products from Sanity
  const getProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const query = `*[_type == "product"]{
        _id,
        name,
        "image": image.asset->url,
        price,
        quantity,
        slug,
        dimensions,
        description
      }`;
      const fetchedProducts = await client.fetch(query);
      setProducts(fetchedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Failed to load products. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle adding product to cart
  const handleAddToCart = (product: Product) => {
    dispatch(add(product));
    setCartNotification(`${product.name} added to the cart!`);
    setTimeout(() => setCartNotification(null), 3000);
  };

  // Handle adding/removing product from wishlist
  const handleWishlistToggle = (product: Product) => {
    const isInWishlist = wishlist.some((item) => item._id === product._id);
    if (isInWishlist) {
      dispatch(removeFromWishlist(product._id));
      setWishlistNotification(`${product.name} removed from wishlist.`);
    } else {
      // Ensure description is a string
      const productWithValidDescription = {
        ...product,
        description: product.description || '', // Provide a default value if undefined
      };
      dispatch(addToWishlist(productWithValidDescription)); // Use the modified product
      setWishlistNotification(`${product.name} added to wishlist!`);
    }
    setTimeout(() => setWishlistNotification(null), 3000);
  };

  useEffect(() => {
    getProducts();
  }, []);

  // Render Wishlist Items
  const renderWishlistItems = () => {
    if (wishlist.length === 0) {
      return <p className="text-gray-600">Your wishlist is empty.</p>;
    }

    return (
      <div className="grid gap-6 lg:grid-cols-3 sm:grid-cols-2">
        {wishlist.map((item) => (
          <div
            key={item._id}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            <Link href={`/products/${item.slug?.current}`}>
              <div className="w-full h-[200px] flex justify-center items-center bg-gray-100 rounded-t-lg overflow-hidden">
                <Image
                  className="object-contain"
                  src={item.image}
                  alt={item.name}
                  height={200}
                  width={200}
                  loading="lazy"
                />
              </div>
            </Link>
            <div className="px-6 pb-6 pt-4">
              <h5 className="text-lg font-semibold text-gray-900">
                {item.name}
              </h5>
              <div className="flex items-center mt-4">
                <span className="text-xl font-bold text-gray-900">
                  ${item.price}
                </span>
              </div>
              <button
                onClick={() => handleWishlistToggle(item)}
                className="bg-red-600 text-white hover:bg-red-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-6 py-2 mt-4 transition-all duration-200"
              >
                Remove from Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  if (loading) {
    return <p className="text-center text-lg">Loading products...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="relative">
      {/* Notification Banner */}
      {cartNotification && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-md shadow-xl z-50">
          {cartNotification}{" "}
          <Link
            href="/Cart"
            className="underline ml-2 text-white font-bold hover:text-gray-200"
          >
            View Cart
          </Link>
        </div>
      )}
      {wishlistNotification && (
        <div className="fixed top-16 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-md shadow-xl z-50">
          {wishlistNotification}
        </div>
      )}

      {/* Wishlist Section */}
      <div className="bg-gray-100 p-8 mb-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
        {renderWishlistItems()}
      </div>

      {/* Product Grid */}
      <div className="gap-8 grid lg:grid-cols-3 sm:grid-cols-2 p-12">
        {products.map((product) => {
          const isInWishlist = wishlist.some((item) => item._id === product._id);
          return (
            <div
              key={product._id}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <Link href={`/products/${product.slug.current}`}>
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
                <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                  {product.name}
                </h5>
                <p className="text-gray-800 text-sm mt-2">
                  <strong>Available Quantity:</strong> {product.quantity}
                </p>
                <div className="flex items-center mt-4">
                  <span className="text-2xl font-semibold text-gray-900">
                    ${product.price}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-5">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-blue-600 text-white hover:bg-blue-700 font-medium rounded-lg text-sm px-6 py-3 transition-all duration-200"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleWishlistToggle(product)}
                    className={`${
                      isInWishlist ? "bg-red-600" : "bg-gray-200"
                    } text-white hover:bg-red-700 font-medium rounded-lg text-sm px-6 py-3 transition-all duration-200`}
                  >
                    {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;