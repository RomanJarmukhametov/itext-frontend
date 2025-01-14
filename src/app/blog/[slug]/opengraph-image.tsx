import { ImageResponse } from 'next/og';
import { getBlogPostData } from '@/data/loaders';
import { getStrapiMedia } from '@/lib/utils';

export const runtime = 'edge'; // Use edge runtime for better performance

// Default metadata for fallback cases
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/jpeg';

export default async function Image({ params }: { params: { slug: string } }) {
  // Fetch blog post data based on the slug
  const { slug } = params;
  const data = await getBlogPostData(slug);
  const post = data?.data[0];

  // Resolve image URL using getStrapiMedia
  const imageUrl = post?.image?.url
    ? getStrapiMedia(post.image.url)
    : `${process.env.NEXT_PUBLIC_SITE_URL}/opengraph-image.jpg`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    ),
    {
      ...size,
    }
  );
}
