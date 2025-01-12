/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from 'react';
import Link from 'next/link';

import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';

export default function BlockRendererClient({ content }: { readonly content: BlocksContent }) {
  if (!content) return null;
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: ({ children }) => (
          <p className="mb-4 text-base md:text-lg text-coolGray-500">{children}</p>
        ),
        heading: ({ children, level }) => {
          switch (level) {
            case 1:
              return (
                <h1 className="text-coolGray-900 font-bold mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
                  {children}
                </h1>
              );
            case 2:
              return (
                <h2 className="text-coolGray-900 font-bold text-3xl md:text-4xl mb-4 leading-relaxed tracking-wide">
                  {children}
                </h2>
              );
            case 3:
              return (
                <h3 className="mt-3 text-coolGray-900 font-bold text-xl md:text-2xl leading-tight mb-4">
                  {children}
                </h3>
              );

            default:
              return (
                <h1 className="text-coolGray-900 font-bold mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
                  {children}
                </h1>
              );
          }
        },
        link: ({ children, url }) => (
          <Link
            className="text-sky-500 hover:text-sky-700 hover:underline"
            href={url}
            target="_blank"
          >
            {children}
          </Link>
        ),
        quote: ({ children }) => (
          <blockquote className="mb-6 p-6 border-l-2 border-blue-500">
            <p className="mb-4 text-xl md:text-2xl leading-tight font-medium text-coolGray-800">
              {children}
            </p>
          </blockquote>
        ),
        list: ({ format, children }) => {
          if (format === 'ordered') {
            return (
              <ol className="list-decimal list-inside pl-4 mb-6 text-base md:text-lg text-coolGray-500">
                {children}
              </ol>
            );
          }
          return (
            <ul className="list-disc list-inside pl-4 mb-6 text-base md:text-lg text-coolGray-500">
              {children}
            </ul>
          );
        },
      }}
    />
  );
}
