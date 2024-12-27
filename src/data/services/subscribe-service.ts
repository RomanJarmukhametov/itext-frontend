import { getStrapiURL } from '@/lib/utils';

interface SubscribeUserProps {
  userEmail: string;
}

const baseUrl = getStrapiURL();

export async function subscribeUserService(userData: SubscribeUserProps) {
  const url = new URL('/api/subscribers', baseUrl);

  try {
    const response = await fetch(url.toString(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: { ...userData },
      }),
      cache: 'no-cache',
    });

    if (!response.ok) {
      // Handle non-200 HTTP responses
      const errorData = await response.json();
      return {
        error: errorData.error || 'Failed to subscribe user.',
      };
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Subscription Service Error:', error);
    return {
      error: 'An unexpected error occurred. Please try again later.',
    };
  }
}
