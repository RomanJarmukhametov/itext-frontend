/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from 'next';
import moment from 'moment';
import 'moment/locale/ru';
import { getBlogPostData } from '@/data/loaders';
import { StrapiImage } from '@/components/common/StrapiImage';
import Heading from '@/components/common/Heading';
import BodyText from '@/components/common/BodyText';
import BlockRendererClient from '@/components/layout/BlockRendererClient';
import CopyLinkButton from '@/components/common/CopyLinkButton';
import SocialMediaShareButtons from '@/components/common/SocialMediaShareButtons';
import Subscribe from '@/components/layout/Subscribe';
import AnimatedSection from '@/components/common/AnimatedSection';

interface Props {
  params: Promise<{ slug: string }>;
}

interface SafeMetadata {
  title: string;
  description: string;
}

export default async function SinglePost({ params }: Props) {
  // Await params before destructuring its properties
  const { slug } = await params;

  const data = await getBlogPostData(slug);
  const post = data?.data[0];
  if (!post) return <div>No posts found</div>;

  // Metadata object for dynamic SEO
  const metadata: Metadata = {
    title: post.title || 'Default Title',
    description: post.description || 'Default Description',
  };

  const postUrl = `https://www.itext.kz/blog/${slug}`;
  const postTitle = post.title;

  // Generate JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: post.image.url ? `https://content.itext.kz${post.image.url}` : undefined,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Бюро переводов iText',
      logo: {
        '@type': 'ImageObject',
        url: 'https://content.itext.kz/uploads/itext_logo_04b4444084.svg',
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    description: post.description,
    articleBody: post.content
      ? post.content.map((block: { text: any }) => block.text).join(' ')
      : undefined,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
  };

  return (
    <>
      <MetadataRenderer metadata={metadata as SafeMetadata} />

      {/* Add JSON-LD to the page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="py-16 md:py-24 bg-whitebg-pattern-white">
        <div className="container px-4 mx-auto">
          <div className="md:max-w-2xl mx-auto mb-12 text-center">
            <div className="flex items-center justify-center">
              <p className="inline-block text-blue-500 font-medium">{post.author}</p>
              <span className="mx-1 text-blue-500">•</span>
              <p className="inline-block text-blue-500 font-medium">
                {moment(post.publishedAt).format('D MMMM YYYY')}
              </p>
            </div>
            <Heading level={1}>{post.title}</Heading>
            <BodyText variant="large" text={post.subtitle} className="mb-6" />

            <div className="inline-block py-1 px-3 text-xs leading-5 text-blue-500 font-medium uppercase bg-blue-100 rounded-full shadow-sm">
              {post.category}
            </div>
          </div>

          <div className="mb-10 mx-auto max-w-5xl overflow-hidden rounded-lg">
            <StrapiImage
              src={post.image.url}
              alt={post.image.alternativeText}
              width={1200}
              height={686}
              priority
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="md:max-w-3xl mx-auto">
            <BlockRendererClient content={post.content} />
          </div>

          <div className="flex items-center justify-center">
            <CopyLinkButton />
            <SocialMediaShareButtons postUrl={postUrl} postTitle={postTitle} />
          </div>
        </div>
      </section>
      <AnimatedSection>
        <Subscribe />
      </AnimatedSection>
    </>
  );
}

// Utility Component to Render Metadata
function MetadataRenderer({ metadata }: { metadata: SafeMetadata }) {
  return (
    <>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
    </>
  );
}
