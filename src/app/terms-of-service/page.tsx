import type { Metadata } from 'next';
import { getTermsOfServiceData } from '@/data/loaders';
import AnimatedSection from '@/components/common/AnimatedSection';
import BlockRendererClient from '@/components/layout/BlockRendererClient';

interface SafeMetadata {
  title: string;
  description: string;
}

export default async function Terms() {
  const strapiData = await getTermsOfServiceData();

  const { title, description, content } = strapiData?.data || {};

  // Metadata object for dynamic SEO
  const metadata: Metadata = {
    title: title || 'Default Title',
    description: description || 'Default Description',
  };

  return (
    <>
      <MetadataRenderer metadata={metadata as SafeMetadata} />
      <AnimatedSection>
        <section className="py-20 xl:pt-24 xl:pb-28 bg-coolGray-50 bg-pattern-light-one">
          <div className="container px-4 mx-auto">
            <BlockRendererClient content={content} />
          </div>
        </section>
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
