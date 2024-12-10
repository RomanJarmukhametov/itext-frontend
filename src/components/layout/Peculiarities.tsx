import { StrapiImage } from '@/components/common/StrapiImage';
import Tagline from '@/components/common/Tagline';
import Heading from '@/components/common/Heading';
import BodyText from '@/components/common/BodyText';
import { getIcon } from '@/lib/icons';

interface CardProps {
  id: number;
  icon: string;
  heading: string;
  description: string;
}

interface ImageProps {
  id: number;
  url: string;
  alternativeText: string;
}

interface PeculiaritiesProps {
  id: number;
  documentId: string;
  __component: string;
  tagline: string;
  heading: string;
  description: string;
  card: CardProps[];
  image: ImageProps;
}

export default function Peculiarities({ data }: { readonly data: PeculiaritiesProps }) {
  const { tagline, heading, description, image, card } = data;

  return (
    <section
      className="py-24 bg-coolGray-50 overflow-hidden bg-pattern-light"
      aria-labelledby="peculiarities-heading"
    >
      <div className="container px-4 mx-auto">
        <div className="md:max-w-4xl mb-16 md:mb-20">
          <Tagline text={tagline} />
          <Heading level={2} id="peculiarities-heading">
            {heading}
          </Heading>
          <BodyText text={description} variant="large" />
        </div>
        <div className="flex flex-wrap lg:items-center -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            {card.map((item) => (
              <div
                key={item.id}
                className="flex flex-wrap p-8 text-center md:text-left hover:bg-white hover:shadow-xl hover:scale-105 rounded-md transition duration-200"
              >
                <div className="w-full md:w-auto mb-6 md:mb-0 md:pr-6">{getIcon(item.icon)}</div>
                <div className="w-full md:flex-1 md:pt-3">
                  <Heading level={3}>{item.heading}</Heading>
                  <BodyText text={item.description} variant="normal" />
                </div>
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="relative mx-auto md:mr-0 max-w-max">
              <StrapiImage src={image.url} alt={image.alternativeText} width={1200} height={972} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
