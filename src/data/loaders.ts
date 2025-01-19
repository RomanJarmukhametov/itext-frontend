import qs from 'qs';
import { getStrapiURL } from '@/lib/utils';

const baseUrl = getStrapiURL();

async function fetchData(
  url: string,
  cacheOptions: { cache?: RequestCache; next?: { revalidate?: number } } = {}
) {
  const authToken = null; // we will implement this later getAuthToken() later
  const headers = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
    ...cacheOptions, // Pass caching options
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

  return await fetchData(url.href, { next: { revalidate: 3600 } });
}

export async function getHomePageData() {
  const url = new URL('/api/home-page', baseUrl);

  url.search = qs.stringify({
    populate: {
      blocks: {
        on: {
          'layout.hero': {
            populate: {
              image: {
                fields: ['url', 'alternativeText'],
              },
            },
          },
          'layout.features': {
            populate: {
              card: true,
            },
          },
          'layout.numbers': {
            populate: {
              stats: true,
            },
          },
          'layout.advantages': {
            populate: {
              card: true,
            },
          },
          'layout.logos': {
            populate: {
              image: {
                fields: ['url', 'alternativeText'],
              },
            },
          },
          'layout.reviews': {
            populate: true,
          },
          'layout.cta': {
            populate: true,
          },
        },
      },
    },
  });

  return await fetchData(url.href, { next: { revalidate: 60 } }); // Revalidate every minute
}

export async function getAboutPageData() {
  const url = new URL('/api/about-page', baseUrl);

  url.search = qs.stringify({
    populate: {
      blocks: {
        on: {
          'layout.page-header': {
            populate: {
              image: {
                fields: ['url', 'alternativeText'],
              },
            },
          },
          'layout.values': {
            populate: {
              valueCard: true,
            },
          },
          'layout.numbers': {
            populate: {
              stats: true,
            },
          },
          'layout.advantages': {
            populate: {
              card: true,
            },
          },
          'layout.logos': {
            populate: {
              image: {
                fields: ['url', 'alternativeText'],
              },
            },
          },
          'layout.cta': {
            populate: true,
          },
        },
      },
    },
  });

  return await fetchData(url.href, { next: { revalidate: 120 } }); // Revalidate every 2 minutes
}

export async function getServicesPageData() {
  const url = new URL('/api/service-page', baseUrl);

  url.search = qs.stringify({
    populate: {
      blocks: {
        on: {
          'layout.page-header': {
            populate: {
              image: {
                fields: ['url', 'alternativeText'],
              },
            },
          },
          'layout.peculiarities': {
            populate: {
              image: {
                fields: ['url', 'alternativeText'],
              },
              card: true,
            },
          },
          'layout.features': {
            populate: {
              card: true,
            },
          },
          'layout.faq': {
            populate: {
              card: true,
            },
          },
          'layout.logos': {
            populate: {
              image: {
                fields: ['url', 'alternativeText'],
              },
            },
          },
          'layout.reviews': {
            populate: true,
          },
          'layout.cta': {
            populate: true,
          },
        },
      },
    },
  });

  return await fetchData(url.href, { next: { revalidate: 300 } }); // Revalidate every 5 minutes
}

export async function getBlogPageData() {
  const url = new URL('/api/blog-page', baseUrl);

  url.search = qs.stringify({
    populate: {
      blogPageHeader: true,
    },
  });

  return await fetchData(url.href, { next: { revalidate: 600 } }); // Revalidate every 10 minutes
}

export async function getAllBlogPostsData() {
  const url = new URL('/api/posts', baseUrl);

  url.search = qs.stringify({
    sort: ['publishedAt:desc'],
    populate: {
      image: {
        fields: ['url', 'alternativeText'],
      },
    },
  });

  return await fetchData(url.href, { cache: 'no-store' }); // No cache for dynamic blog posts
}

export async function getBlogPostData(slug: string) {
  const url = new URL(`/api/posts`, baseUrl);

  url.search = qs.stringify({
    populate: {
      image: {
        fields: ['url', 'alternativeText', 'name'],
      },
    },
    filters: {
      slug: { $eq: slug },
    },
    content: true,
  });

  return await fetchData(url.href, { cache: 'no-store' }); // No cache for dynamic blog posts
}

export async function getContactPageData() {
  const url = new URL('/api/contact-page', baseUrl);

  url.search = qs.stringify({
    populate: {
      image: {
        fields: ['url', 'alternativeText'],
      },
      pageHeader: true,
    },
  });

  return await fetchData(url.href, { next: { revalidate: 3600 } }); // Revalidate every hour
}

export async function getTermsOfServiceData() {
  const url = new URL('/api/terms-of-service-page', baseUrl);

  url.search = qs.stringify({
    content: true,
  });

  return await fetchData(url.href);
}
