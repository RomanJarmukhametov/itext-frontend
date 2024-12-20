/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useState } from 'react';
import Link from 'next/link';
import moment from 'moment';
import 'moment/locale/ru';
import { StrapiImage } from '@/components/common/StrapiImage';
import { getIcon } from '@/lib/icons';

function BlogPostRenderer({ blogPosts }: { blogPosts: any[] }) {
  const [visiblePosts, setVisiblePosts] = useState(4);

  const showMorePosts = () => setVisiblePosts((prev) => Math.min(prev + 4, blogPosts.length));

  return (
    <>
      <div className="flex flex-wrap -mx-4 mb-12 md:mb-20">
        {blogPosts.slice(0, visiblePosts).map((post) => (
          <div key={post.id} className="w-full md:w-1/2 px-4 mb-8">
            {/* Blog Post Content */}
            <Link
              href={`/blog/${post.slug}`}
              className="block mb-6 p-8 overflow-hidden hover:bg-white hover:shadow-xl hover:scale-105 rounded-md transition duration-200"
            >
              <StrapiImage
                className="w-full h-auto rounded-md"
                src={post.image.url}
                alt={post.image.alternativeText}
                width={1200}
                height={600}
              />

              {/* Format Date with Moment */}
              <p className="mb-2 text-coolGray-500 font-medium">
                {moment(post.publishedAt).format('D MMMM YYYY')}
              </p>
              <p className="inline-block mb-4 text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold">
                {post.title}
              </p>
              <p className="mb-4 text-base md:text-lg text-coolGray-400 font-medium">
                {post.subtitle}
              </p>
              <p className="inline-flex items-center text-base md:text-lg text-blue-500 font-semibold">
                <span className="mr-3">Читать полностью</span>
                {getIcon('ArrowRight')}
              </p>
            </Link>
          </div>
        ))}
      </div>
      {visiblePosts < blogPosts.length && (
        <button
          onClick={showMorePosts}
          className="flex items-center justify-center py-2 px-4 mx-auto text-sm leading-5 text-blue-50 font-medium bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 md:max-w-max rounded-md"
        >
          <span className="mr-3">Смотреть больше</span>
          {getIcon('ArrowDown')}
        </button>
      )}
    </>
  );
}

export default BlogPostRenderer;
