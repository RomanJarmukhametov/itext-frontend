/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from 'next';
import { getHomePageData } from '@/data/loaders';
import HeroHomepage from '@/components/layout/HeroHomepage';
import Features from '@/components/layout/Features';
import Numbers from '@/components/layout/Numbers';
import Advantages from '@/components/layout/Advantages';
import Logos from '@/components/layout/Logos';
import Reviews from '@/components/layout/Reviews';
import Cta from '@/components/layout/Cta';
import AnimatedSection from '@/components/common/AnimatedSection';

interface SafeMetadata {
  title: string;
  description: string;
}

const blockComponents = {
  'layout.hero': HeroHomepage,
  'layout.features': Features,
  'layout.numbers': Numbers,
  'layout.advantages': Advantages,
  'layout.logos': Logos,
  'layout.reviews': Reviews,
  'layout.cta': Cta,
};

function blockRenderer(block: any) {
  const Component = blockComponents[block.__component as keyof typeof blockComponents];
  return Component ? (
    <AnimatedSection key={block.id}>
      <Component data={block} />
    </AnimatedSection>
  ) : null;
}

export default async function Home() {
  const strapiData = await getHomePageData();

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
