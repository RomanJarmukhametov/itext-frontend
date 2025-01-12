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

  return await fetchData(url.href);
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

  return await fetchData(url.href);
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

  return await fetchData(url.href);
}

export async function getBlogPageData() {
  const url = new URL('/api/blog-page', baseUrl);

  url.search = qs.stringify({
    populate: {
      blogPageHeader: true,
    },
  });

  return await fetchData(url.href);
}

export async function getAllBlogPostsData() {
  const url = new URL('/api/posts', baseUrl);

  url.search = qs.stringify({
    populate: {
      image: {
        fields: ['url', 'alternativeText'],
      },
    },
  });

  return await fetchData(url.href);
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

  return await fetchData(url.href);
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

  return await fetchData(url.href);
}

export async function getTermsOfServiceData() {
  const url = new URL('/api/terms-of-service-page', baseUrl);

  url.search = qs.stringify({
    content: true,
  });

  return await fetchData(url.href);
}
