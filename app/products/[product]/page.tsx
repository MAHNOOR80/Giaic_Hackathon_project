"use client"
import { client } from '@/sanity/lib/client';
import { sanityFetch } from '@/sanity/lib/live';
import { defineQuery } from 'next-sanity';
import React, { useState } from 'react';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import { useDispatch } from 'react-redux';
import { add } from '@/app/redux/cartslice'; // Import your add action
import Link from 'next/link';

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

async function getProductBySlug(slug) {
  try {
    const GET_PRODUCT_BY_SLUG_QUERY = `*[_type == "product" && slug.current == $slug][0]`;
    const products = await client.fetch(GET_PRODUCT_BY_SLUG_QUERY, { slug });
    return products || null;
  } catch (error) {
    console.error("Error while fetching product data", error);
    return null;
  }
}

const Page = ({ params }) => {
  const { product } = params;
  const [notification, setNotification] = useState<string | null>(null);
  const dispatch = useDispatch();

  // Fetch product data based on the slug
  const [productData, setProductData] :any= useState(null);

  React.useEffect(() => {
    const fetchProductData = async () => {
      const data = await getProductBySlug(product);
      setProductData(data);
    };

    fetchProductData();
  }, [product]);

  // Handle adding product to the cart
  const handleAddToCart = (product:any) => {
    dispatch(add(product));
    setNotification(`${product.name} added to the cart!`);
    setTimeout(() => setNotification(null), 3000); // Clear notification after 3 seconds
  };

  if (!productData) {
    return <p className="text-center text-gray-500">Product not found.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Notification Banner */}
      {notification && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-md shadow-xl z-50">
          {notification}{' '}
          <Link
            href="/Cart"
            className="underline ml-2 text-white font-bold hover:text-gray-200"
          >
            View Cart
          </Link>
        </div>
      )}

      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <Image
            src={urlFor(productData.image).url()}
            alt={productData.name}
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-contain max-w-full max-h-[400px]"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{productData.name}</h1>
          <p className="text-lg text-gray-600 mb-6">{productData.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {productData.tags?.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-700 mb-4">
            <strong>Features:</strong> {productData.features}
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Dimensions:</strong> {productData.dimensions.width}cm (W) x {productData.dimensions.height}cm (H) x {productData.dimensions.depth}cm (D)
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Available Quantity:</strong> {productData.quantity}
          </p>
          <p className="text-2xl font-semibold text-green-600 mb-6">
            ${productData.price}
          </p>
          {/* Add to Cart Button */}
          <button
            onClick={() => handleAddToCart(productData)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;

