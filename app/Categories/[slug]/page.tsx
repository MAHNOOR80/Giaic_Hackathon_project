// import React from 'react';
// import { useRouter } from 'next/router';
// import { createClient } from 'next-sanity';

// const client = createClient({
//   projectId: 'your_project_id',
//   dataset: 'your_dataset',
//   useCdn: false,
// });

// const CategoryPage = ({ category, products }) => {
//   const router = useRouter();

//   // Show a loader while the page is being generated
//   if (router.isFallback) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{category?.name}</h1>
//       <ul>
//         {products.map((product) => (
//           <li key={product._id}>
//             <h2>{product.name}</h2>
//             <p>{product.description}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export async function getStaticPaths() {
//   const categories = await client.fetch(`*[_type == "category"] {
//     slug {
//       current
//     }
//   }`);

//   const paths = categories.map((category) => ({
//     params: { slug: category.slug.current },
//   }));

//   return {
//     paths,
//     fallback: true, // or 'blocking'
//   };
// }

// export async function getStaticProps({ params }) {
//   const { slug } = params;

//   const category = await client.fetch(
//     `*[_type == "category" && slug.current == $slug][0]`,
//     { slug }
//   );

//   const products = await client.fetch(
//     `*[_type == "product" && references($categoryId)]`,
//     { categoryId: category._id }
//   );

//   return {
//     props: {
//       category,
//       products,
//     },
//     revalidate: 10, // Regenerate the page every 10 seconds
//   };
// }

// export default CategoryPage;
