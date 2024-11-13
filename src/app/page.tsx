/* eslint-disable @typescript-eslint/no-explicit-any */
import { getHomePageData } from '@/data/loaders';
import HeroHomepage from '@/components/layout/HeroHomepage';
import Features from '@/components/layout/Features';
import Numbers from '@/components/layout/Numbers';
import Advantages from '@/components/layout/Advantages';

const blockComponents = {
  'layout.hero': HeroHomepage,
  'layout.features': Features,
  'layout.numbers': Numbers,
};

function blockRenderer(block: any) {
  const Component = blockComponents[block.__component as keyof typeof blockComponents];
  return Component ? <Component key={block.id} data={block} /> : null;
}

export default async function Home() {
  const strapiData = await getHomePageData();

  // console.dir(strapiData, { depth: null });

  const { blocks } = strapiData?.data || [];

  return (
    <>
      {blocks.map(blockRenderer)}
      <Advantages />
    </>
  );
}
