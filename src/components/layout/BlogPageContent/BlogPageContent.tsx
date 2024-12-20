// import Link from 'next/link';
// import { StrapiImage } from '@/components/common/StrapiImage';
// import { getAllBlogPostsData } from '@/data/loaders';

// interface ImageProps {
//   id: number;
//   url: string;
//   alternativeText: string;
// }

// interface BlogPost {
//   id: number;
//   publishedAt: string;
//   title: string;
//   subtitle: string;
//   slug: string;
//   image: ImageProps;
// }

// export default async function BlogPageContent() {
//   const strapiData = await getAllBlogPostsData();

//   const blogPosts: BlogPost[] = strapiData?.data || [];

//   console.dir(strapiData, { depth: null });
//   return (
//     <>
//       <div className="flex flex-wrap -mx-4 mb-12 md:mb-20">
//         {blogPosts.map((post) => (
//           <div key={post.id} className="w-full md:w-1/2 px-4 mb-8">
//             <Link className="block mb-6 overflow-hidden rounded-md" href="#">
//               <StrapiImage
//                 className="w-full h-auto rounded-md"
//                 src={post.image.url}
//                 alt={post.image.alternativeText}
//                 width={1200}
//                 height={600}
//               />
//             </Link>

//             <p className="mb-2 text-coolGray-500 font-medium">{post.publishedAt}</p>
//             <p className="inline-block mb-4 text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold">
//               {post.title}
//             </p>
//             <p className="mb-4 text-base md:text-lg text-coolGray-400 font-medium">
//               {post.subtitle}
//             </p>
//             <Link
//               className="inline-flex items-center text-base md:text-lg text-blue-500 hover:text-blue-600 font-semibold"
//               href={`/blog/${post.slug}`}
//             >
//               <span className="mr-3">Читать полностью</span>
//               <svg
//                 width={8}
//                 height={10}
//                 viewBox="0 0 8 10"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z"
//                   fill="currentColor"
//                 />
//               </svg>
//             </Link>
//           </div>
//         ))}
//       </div>
//       <button className="flex items-center justify-center py-2 px-4 mx-auto text-sm leading-5 text-blue-50 font-medium bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 md:max-w-max rounded-md">
//         <span className="mr-3">Смотреть больше</span>
//         <svg
//           className="text-blue-50"
//           width={12}
//           height={10}
//           viewBox="0 0 12 10"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M10.7583 4.40833C10.6809 4.33023 10.5887 4.26823 10.4871 4.22592C10.3856 4.18362 10.2767 4.16183 10.1667 4.16183C10.0567 4.16183 9.94773 4.18362 9.84619 4.22592C9.74464 4.26823 9.65247 4.33023 9.575 4.40833L6.83333 7.15833V0.833333C6.83333 0.61232 6.74554 0.400358 6.58926 0.244078C6.43297 0.0877975 6.22101 0 6 0C5.77899 0 5.56702 0.0877975 5.41074 0.244078C5.25446 0.400358 5.16667 0.61232 5.16667 0.833333V7.15833L2.425 4.40833C2.26808 4.25141 2.05525 4.16326 1.83333 4.16326C1.61141 4.16326 1.39859 4.25141 1.24167 4.40833C1.08475 4.56525 0.99659 4.77808 0.99659 5C0.99659 5.22192 1.08475 5.43475 1.24167 5.59167L5.40833 9.75833C5.48759 9.8342 5.58104 9.89367 5.68333 9.93333C5.78308 9.97742 5.89094 10.0002 6 10.0002C6.10906 10.0002 6.21692 9.97742 6.31667 9.93333C6.41896 9.89367 6.51241 9.8342 6.59167 9.75833L10.7583 5.59167C10.8364 5.5142 10.8984 5.42203 10.9407 5.32048C10.9831 5.21893 11.0048 5.11001 11.0048 5C11.0048 4.88999 10.9831 4.78107 10.9407 4.67952C10.8984 4.57797 10.8364 4.4858 10.7583 4.40833Z"
//             fill="currentColor"
//           />
//         </svg>
//       </button>
//     </>
//   );
// }

import { getAllBlogPostsData } from '@/data/loaders';
import BlogPostRenderer from './BlogPostRenderer';

export default async function BlogPageContent() {
  const strapiData = await getAllBlogPostsData();
  const blogPosts = strapiData?.data || [];

  return <BlogPostRenderer blogPosts={blogPosts} />;
}
