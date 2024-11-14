import { StrapiImage } from '@/components/common/StrapiImage';
import Heading from '@/components/common/Heading';
import Tagline from '@/components/common/Tagline';
import BodyText from '@/components/common/BodyText';
interface ImageProps {
  id: number;
  url: string;
  alternativeText: string;
}

interface LogosProps {
  id: number;
  documentId: string;
  __component: string;
  tagline: string;
  heading: string;
  description: string;
  image: ImageProps[];
}

export default function Logos({ data }: { readonly data: LogosProps }) {
  const { tagline, heading, description } = data;

  // Shuffle and select 5 random images
  const shuffledImages = [...data.image].sort(() => Math.random() - 0.5).slice(0, 5); // Select only the first 5

  return (
    <section className="py-20 xl:pt-24 bg-white bg-pattern-white" aria-labelledby="logos-heading">
      <div className="container px-4 mx-auto">
        <div className="mb-8 text-center">
          <Tagline text={tagline} />
          <Heading level={2} id="logos-heading">
            {heading}
          </Heading>
          <BodyText text={description} variant="large" />
        </div>
        <div className="flex flex-wrap justify-center -mx-4">
          {shuffledImages.map((item) => (
            <div key={item.id} className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0">
              <div className="flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md bg-coolGray-50 shadow-md">
                <StrapiImage
                  className="mx-auto h-auto w-auto"
                  src={item.url}
                  alt={item.alternativeText}
                  width={144}
                  height={54}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
