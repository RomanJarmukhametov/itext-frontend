/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';
import RSS from 'rss';
import { getAllBlogPostsData } from '@/data/loaders';

export async function GET() {
  try {
    // Fetch all blog posts
    const strapiData = await getAllBlogPostsData();
    const blogPosts = strapiData?.data || [];

    // Initialize the RSS feed
    const feed = new RSS({
      title: 'iText Blog',
      description: 'Последние посты блога бюро переводов iText.',
      feed_url: 'https://www.itext.kz/rss.xml',
      site_url: 'https://www.itext.kz',
      language: 'ru', // Specify Russian language
      pubDate: new Date().toUTCString(),
    });

    // Add each blog post to the RSS feed
    blogPosts.forEach((post: any) => {
      const { title, subtitle, slug, image, publishedAt } = post;
      feed.item({
        title: title,
        description: subtitle,
        url: `https://www.itext.kz/blog/${slug}`,
        guid: slug,
        date: publishedAt,
        enclosure: image?.url
          ? {
              url: image.url,
              type: 'image/jpeg',
            }
          : undefined,
      });
    });

    // Generate the RSS XML
    const rssXml = feed.xml({ indent: true });

    // Return the RSS feed as a response
    return new NextResponse(rssXml, {
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8', // Ensure UTF-8 encoding
        'Cache-Control': 'no-cache',
      },
    });
  } catch (error) {
    console.error('Error generating RSS feed:', error);
    return new NextResponse('Failed to generate RSS feed', { status: 500 });
  }
}
