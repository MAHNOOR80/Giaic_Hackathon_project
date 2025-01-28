"use client";

import Link from "next/link";
import React, { useEffect, useState, useCallback } from "react"; // Import useCallback
import { useDispatch} from "react-redux";
import { add } from "../redux/cartslice";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

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
  category?: string;
}

const Search: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");
  const [category, setCategory] = useState<string>("");
  const [, setCartNotification] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const query = `*[_type == "product"]{
        "image": image.asset->url,
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
        setFilteredProducts(products); // Initialize filtered products
      } catch (error) {
        console.error('Error fetching products:', error);
        setError("Failed to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Handle adding product to cart
    const handleAddToCart = (product: Product) => {
      const imageUrl = typeof product.image === "string" ? product.image : urlFor(product.image).url();
  
      const cartItem = {
        ...product,
        image: imageUrl,
        _id: product._id || new Date().getTime().toString(),
      };
  
      dispatch(add(cartItem));
      setCartNotification(`${product.name} added to the cart!`);
      setTimeout(() => setCartNotification(null), 3000);
    };
  

  // Filter products based on search query, price range, and category
  const handleSearch = useCallback(() => {
    const filtered = products.filter(product => {
      const matchesName = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = (minPrice === "" || product.price >= (minPrice as number)) &&
                           (maxPrice === "" || product.price <= (maxPrice as number));
      const matchesCategory = category ? product.category === category : true;

      return matchesName && matchesPrice && matchesCategory;
    });
    setFilteredProducts(filtered);
  }, [products, searchQuery, minPrice, maxPrice, category]);

  useEffect(() => {
    handleSearch(); // Re-filter products whenever search criteria change
  }, [handleSearch]);

  if (loading) {
    return <p className="text-center text-lg">Loading products...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="relative pt-20"> {/* Add padding to the top */}
      <h1 className="text-4xl font-extrabold mb-8 text-center tracking-wide text-[#2A254B]">
        {category.charAt(0).toUpperCase() + category.slice(1)} Collection
      </h1>

      <div className="max-w-6xl mx-auto p-4"> {/* Center the content */}
        {/* Search Input */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
          />
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value ? parseFloat(e.target.value) : "")}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full mt-2"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value ? parseFloat(e.target.value) : "")}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full mt-2"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full mt-2"
          >
            <option value="">Select Category</option>
            {/* Add your categories here */}
            <option value="Ceramics">Ceramics</option>
            <option value="Plantpots">Plantpots</option>
            <option value="TablePage">TablePage</option>
            <option value="Crockery">Crockery</option>
            <option value="Cutlery">Cutlery</option>
            <option value="Chairs">Chairs</option>
            <option value="Tableware">Tableware</option>
          </select>
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-2 w-full"
          >
            Search
          </button>
        </div>

        {/* Product Grid */}
        <div className="gap-8 grid lg:grid-cols-3 sm:grid-cols-2 p-12">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <Link href={`/products/${product.slug}`}>
                <div className="w-full h-[300px] flex justify-center items-center bg-gray-100 rounded-t-lg overflow-hidden group">
                  <Image
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                    src={product.image} // Ensure this is the correct image URL
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;