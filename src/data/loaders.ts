import qs from 'qs';
import { getStrapiURL } from '@/lib/utils';

const baseUrl = getStrapiURL();

async function fetchData(url: string) {
  const authToken = null; // we will implement this later getAuthToken() later
  const headers = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
  };

  try {
    const response = await fetch(url, authToken ? headers : {});
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // or return null;
  }
}

export async function getNavigationData() {
  const url = new URL('/api/navigation', baseUrl);

  url.search = qs.stringify({
    populate: {
      navItem: true,
      logoBlack: {
        fields: ['url', 'alternativeText'],
      },
      logoWhite: {
        fields: ['url', 'alternativeText'],
      },
    },
  });

  return await fetchData(url.href);
}
