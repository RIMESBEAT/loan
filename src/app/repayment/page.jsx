// import React from 'react'

// const Product = () => {
//   return (
//     <div>Product</div>
//   )
// }

// export default Product

// import { apiVersion, dataset, projectId, client } from '../env';
// import { createClient, groq } from 'next-sanity';
// import imageUrlBuilder from '@sanity/image-url';
// export const client = createClient({
//   apiVersion: apiVersion,
//   dataset: dataset,
//   projectId: projectId,
//   useCdn: false,
// });

// const builder = imageUrlBuilder(client);

// export const urlFor = (source) => {
//   return builder.image(source);
// };

// export const getApk = async () =>
//   await client.fetch(
//     groq`*[_type == "download"] {
//        "pdf_file": pdf_file.asset->url,
//            } `,
//     { cachePolicy: 'no-cache' }
//   );

// export default client;
