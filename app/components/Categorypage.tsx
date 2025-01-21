'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';

// Define the Product interface
interface Product {
  category: string | null;
  name: string;
  price: number;
  slug: string;
  imageUrl: string | null;
  description: string;
  quantity: number;
}

// Main CategoryPage component
export default function CategoryPage({ categoryName }: { categoryName: string }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const query = `*[_type == "product"]{
        "imageUrl": image.asset->url,
        price,
        "slug": slug.current,
        name,
        description,
        quantity,
        "category": category->name
      }`;

      try {
        const products: Product[] = await client.fetch(query);
        console.log('Fetched products:', products);
        setProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold mb-8 text-center tracking-wide text-[#2A254B]">
        {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Collection
      </h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products
          .filter((product) => product.category === categoryName)
          .map((product) => (
            <div
              key={product.slug}
              className="border p-4 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 flex flex-col items-center transform hover:scale-105"
            >
              {/* Product Image */}
              <div className="w-60 h-60 overflow-hidden rounded-md mb-4">
                <Image
                  src={product.imageUrl || '/placeholder-image.png'}
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
                  ? product.description.slice(0, 60) + '...'
                  : product.description}
              </p>

              {/* Product Price */}
              <p className="text-lg font-medium text-gray-700 mb-2">
                Price:{' '}
                <span className="text-green-600 font-bold">${product.price}</span>
              </p>

              {/* Product Quantity */}
              <p className="text-sm text-gray-500 mb-4">
                Available Quantity:{' '}
                <span className="font-medium">{product.quantity}</span>
              </p>

              {/* Buttons */}
              <div className="flex space-x-4 mt-auto">
                <Link
                  href={`/products/${product.slug}`}
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                >
                  View Detail
                </Link>
              </div>
            </div>
          ))}
      </div>

      {/* View All Products Button */}
      
    </div>
  );
}