import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// This function returns the URL of the Strapi API.
export function getStrapiURL() {
  // return process.env.NEXT_PUBLIC_STRAPI_URL ?? 'http://127.0.0.1:1337';
  return process.env.STRAPI_URL ?? 'http://127.0.0.1:1337';
}

// This function is designed to process media URLs from the Strapi CMS.
export function getStrapiMedia(url: string | null) {
  if (url == null) return null;
  if (url.startsWith('data:')) return url;
  if (url.startsWith('http') || url.startsWith('//')) return url;
  return `${getStrapiURL()}${url}`;
}
