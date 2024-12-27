import type { Metadata } from 'next';
import { getBlogPageData } from '@/data/loaders';
import AnimatedSection from '@/components/common/AnimatedSection';
import Tagline from '@/components/common/Tagline';
import Heading from '@/components/common/Heading';
import BodyText from '@/components/common/BodyText';
import BlogPageContent from '@/components/layout/BlogPageContent/BlogPageContent';
import Subscribe from '@/components/layout/Subscribe';
interface SafeMetadata {
  title: string;
  description: string;
}

export default async function Blog() {
  const strapiData = await getBlogPageData();

  const { title, description, blogPageHeader } = strapiData?.data || {};

  // Metadata object for dynamic SEO
  const metadata: Metadata = {
    title: title || 'Default Title',
    description: description || 'Default Description',
  };

  return (
    <>
      <MetadataRenderer metadata={metadata as SafeMetadata} />

      <AnimatedSection>
        <section className="py-24 bg-white bg-pattern-white">
          <div className="container px-4 mx-auto">
            <div className="md:max-w-5xl mx-auto mb-8 md:mb-16 text-center">
              {blogPageHeader && (
                <>
                  <Tagline text={blogPageHeader.tagline} />
                  <Heading level={1}>{blogPageHeader.title}</Heading>
                  <BodyText variant="large" text={blogPageHeader.description} />
                </>
              )}
            </div>

            <BlogPageContent />
          </div>
        </section>
      </AnimatedSection>

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
