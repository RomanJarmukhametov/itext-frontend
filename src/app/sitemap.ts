/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllBlogPostsData } from '@/data/loaders';

export default async function sitemap() {
  const siteUrl = 'https://www.itext.agency';

  const staticRoutes = [
    { path: '/', priority: 1.0 },
    { path: '/about', priority: 0.8 },
    { path: '/blog', priority: 0.8 },
    { path: '/contacts', priority: 0.8 },
    { path: '/services', priority: 0.8 },
    { path: '/terms-of-service', priority: 0.7 },
  ].map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date().toISOString(),
    priority,
  }));

  let blogRoutes = [];
  try {
    const blogData = await getAllBlogPostsData();
    blogRoutes = (blogData.data || []).map((post: any) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt || new Date().toISOString(),
      priority: 0.9,
      changefreq: 'weekly',
    }));
  } catch (error) {
    console.error('Failed to fetch blog posts for sitemap:', error);
  }

  return [...staticRoutes, ...blogRoutes];
}
