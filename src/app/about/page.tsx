/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from 'next';
import { getAboutPageData } from '@/data/loaders';
import AnimatedSection from '@/components/common/AnimatedSection';
import HeroAboutPage from '@/components/layout/HeroAboutPage';
import Values from '@/components/layout/Values';

interface SafeMetadata {
  title: string;
  description: string;
}

const blockComponents = {
  'layout.page-header': HeroAboutPage,
  'layout.values': Values,
};

function blockRenderer(block: any) {
  const Component = blockComponents[block.__component as keyof typeof blockComponents];
  return Component ? (
    <AnimatedSection key={block.id}>
      <Component data={block} />
    </AnimatedSection>
  ) : null;
}

export default async function About() {
  const strapiData = await getAboutPageData();
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
