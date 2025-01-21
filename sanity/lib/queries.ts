import { defineQuery } from "next-sanity";
import { client } from "./client";

// Query to fetch products by category
export async function getProductsByCategory(categorySlug: string) {
  const query = `*[_type == "product" && category->slug.current == $categorySlug]{
    name,
    price,
    quantity,
    "imageUrl": image.asset->url,
    description
  }`;

  const params = { categorySlug };
  return await client.fetch(query, params);
}

// Query to fetch all products
export const allproducts = defineQuery(`
  *[_type == "product"]{
    "category": category->title,
    name,
    slug,
    "imageUrl": image.asset->url,
    price,
    quantity,
    tags,
    description,
    features,
    dimensions
  }
`);

// Query to fetch the first 4 products
export const fourproducts = defineQuery(`
  *[_type == "product"] | order(_createdAt desc)[0..3]{
    "category": category->title,
    name,
    slug,
    "imageUrl": image.asset->url,
    price,
    quantity,
    tags,
    description,
    features,
    dimensions
  }
`);

// Query to fetch product category (example placeholder, needs definition)
export const productcategory = defineQuery(`
  *[_type == "category"]{
    title,
    slug
  }
`);

export { client };
