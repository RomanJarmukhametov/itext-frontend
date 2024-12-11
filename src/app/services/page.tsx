/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from 'next';
import { getServicesPageData } from '@/data/loaders';
import AnimatedSection from '@/components/common/AnimatedSection';
import PageHeader from '@/components/layout/PageHeader';
import Peculiarities from '@/components/layout/Peculiarities';
import Process from '@/components/layout/Process';
import Faq from '@/components/layout/Faq';
import Logos from '@/components/layout/Logos';
import Reviews from '@/components/layout/Reviews';
import Cta from '@/components/layout/Cta';

interface SafeMetadata {
  title: string;
  description: string;
}

const blockComponents = {
  'layout.page-header': PageHeader,
  'layout.peculiarities': Peculiarities,
  'layout.features': Process,
  'layout.faq': Faq,
  'layout.logos': Logos,
  'layout.reviews': Reviews,
  'layout.cta': Cta,
};

function blockRenderer(block: any) {
  const Component = blockComponents[block.__component as keyof typeof blockComponents];
  return Component ? (
    <AnimatedSection key={block.__component}>
      <Component data={block} />
    </AnimatedSection>
  ) : null;
}

export default async function Services() {
  const strapiData = await getServicesPageData();
  // Extract metadata and blocks
  const { title, description, blocks } = strapiData?.data || {};

  // Metadata object for dynamic SEO
  const metadata: Metadata = {
    title: title || 'Default Title',
    description: description || 'Default Description',
  };

  return (
    <>
      <MetadataRenderer metadata={metadata as SafeMetadata} />
      {blocks.map(blockRenderer)}
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
