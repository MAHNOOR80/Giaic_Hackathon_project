import { defineQuery } from "next-sanity";



export const allproducts = defineQuery(`
   *[_type == "product"]{
  "category": category->title,
    name,
    slug,
    "imageUrl":image.asset->url,
    price,
    quantity,
    tags,
    description,
    features,
    dimensions
    
    
}
    `)

   

    
export const fourproducts = defineQuery(`
    *[_type == "product"]{
  "category": category->title,
    name,
    slug,
    "imageUrl":image.asset->url,
    price,
    quantity,
    tags,
    description,
    features,
    dimensions
    
    

     `)


         
export const productcategory = defineQuery(`
    *[_type == ""]{
  category,
  slug
    
    

     `)
