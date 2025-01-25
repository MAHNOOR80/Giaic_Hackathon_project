"use client";
import { client } from "@/sanity/lib/client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { useDispatch } from "react-redux";
import { add } from "@/app/redux/cartslice"; // Import your add action
import Link from "next/link";

// Sanity Image Interface
interface SanityImage {
  asset: {
    _ref: string;
  };
}

// Product Interface
interface Product {
  _id: string;
  image: string | SanityImage;
  name: string;
  description: string;
  price: number;
  quantity: number;
  features: string;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  tags?: string[];
}

// Initialize the Sanity image URL builder
const builder = imageUrlBuilder(client);

// Function to get image URL from Sanity image data
function urlFor(source: SanityImage | string) {
  return builder.image(source);
}

// Fetch product data based on slug
async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const GET_PRODUCT_BY_SLUG_QUERY = `*[_type == "product" && slug.current == $slug][0]`;
    const productData = await client.fetch(GET_PRODUCT_BY_SLUG_QUERY, { slug });
    return productData || null;
  } catch (error) {
    console.error("Error while fetching product data", error);
    return null;
  }
}

const Page = ({ params }: { params: { product: string } }) => {
  const { product } = params;
  const [notification, setNotification] = useState<string | null>(null);
  const dispatch = useDispatch();

  const [productData, setProductData] = useState<Product | null>(null);
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchProductData = async () => {
      const data = await getProductBySlug(product);
      setProductData(data);
    };

    fetchProductData();
  }, [product]);

  const handleAddToCart = (product: Product) => {
    const imageUrl = typeof product.image === "string" ? product.image : urlFor(product.image).url();

    const cartItem = {
      ...product,
      image: imageUrl,
      _id: product._id || new Date().getTime().toString(),
    };

    dispatch(add(cartItem));
    setNotification(`${product.name} added to the cart!`);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      setComments([...comments, newComment.trim()]);
      setNewComment("");
    }
  };

  if (!productData) {
    return <p className="text-center text-gray-500">Product not found.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
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
          <button
            onClick={() => handleAddToCart(productData)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Comment Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Comments</h2>

        {/* Comment Form */}
        <form onSubmit={handleAddComment} className="mb-6">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your comment here..."
            className="w-full border rounded-lg p-4 text-gray-800 focus:ring focus:ring-blue-300 outline-none resize-none"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Post Comment
          </button>
        </form>

        {/* Comment List */}
        {comments.length > 0 ? (
          <ul className="space-y-4">
            {comments.map((comment, index) => (
              <li
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-sm text-gray-800"
              >
                {comment}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default Page;
