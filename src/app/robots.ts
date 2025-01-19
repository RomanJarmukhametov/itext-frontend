import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = 'https://www.itext.agency/';

  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
        disallow: ['/admin/', '/api/', '/_next/', '/uploads/'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
