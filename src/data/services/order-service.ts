/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { getStrapiURL } from '@/lib/utils';

const baseUrl = getStrapiURL();

interface OrderProps {
  userName: string;
  userEmail: string;
  userPhone: string;
  sourceLanguage: string;
  targetLanguage: string;
  userMessage?: string;
}

export async function OrderService(formData: OrderProps) {
  const url = new URL('/api/orders', baseUrl);

  try {
    const response = await fetch(url.toString(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: { ...formData },
      }),
      cache: 'no-cache',
    });

    if (!response.ok) {
      // Handle non-200 HTTP responses
      const errorData = await response.json();
      return {
        error: errorData.error || 'Failed to submit an order.',
      };
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Order Service Error:', error);
    return {
      error: 'An unexpected error occurred. Please try again later.',
    };
  }
}
