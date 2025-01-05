/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { getStrapiURL } from '@/lib/utils';

const baseUrl = getStrapiURL();

export async function FileService(files: File[]) {
  const url = new URL('/api/upload', baseUrl);

  try {
    // Create a FormData object and append files
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('files', file); // Key `files` matches Strapi's API field
    });

    // Make the fetch request
    const response = await fetch(url.toString(), {
      method: 'POST',
      body: formData, // Use FormData directly for file upload
      cache: 'no-cache',
    });

    if (!response.ok) {
      // Handle non-200 HTTP responses
      const errorData = await response.json();
      return {
        error: errorData.error || 'Failed to upload files.',
      };
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('File Service Error:', error);
    return {
      error: 'An unexpected error occurred. Please try again later.',
    };
  }
}
