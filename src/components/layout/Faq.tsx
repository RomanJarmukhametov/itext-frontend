import Link from 'next/link';
import { getIcon } from '@/lib/icons';
import Heading from '@/components/common/Heading';
import Tagline from '@/components/common/Tagline';
import BodyText from '@/components/common/BodyText';

interface CardProps {
  id: number;
  icon: string;
  heading: string;
  description: string;
}

interface FaqProps {
  id: number;
  documentId: string;
  __component: string;
  tagline: string;
  heading: string;
  description: string;
  ctaHeading: string;
  ctaDescription: string;
  ctaButtonText: string;
  ctaButtonLink: string;
  card: CardProps[];
}

export default function Faq({ data }: { readonly data: FaqProps }) {
  const {
    tagline,
    heading,
    description,
    ctaHeading,
    ctaDescription,
    ctaButtonText,
    ctaButtonLink,
    card,
  } = data;

  return (
    <section className="pt-24 bg-coolGray-50 bg-pattern-light" aria-labelledby="faq-heading">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mb-16">
          <Tagline text={tagline} />
          <Heading level={2} id="faq-heading">
            {heading}
          </Heading>
          <BodyText text={description} variant="large" />
        </div>
        <div className="flex flex-wrap pb-16 -mx-4">
          {card.map((item) => (
            <div key={item.id} className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
              <div className="md:max-w-xs">
                {getIcon('Shield')}

                <Heading level={3}>{item.heading}</Heading>
                <BodyText text={item.description} variant="normal" />
              </div>
            </div>
          ))}
        </div>
        <div className="relative -mb-40 py-16 px-4 md:px-8 lg:px-16 bg-coolGray-800 rounded-md overflow-hidden bg-pattern-dark">
          <div className="relative max-w-max mx-auto text-center">
            <Heading level={2} className="mb-2 text-2xl md:text-5xl  font-bold text-white">
              {ctaHeading}
            </Heading>

            <BodyText text={ctaDescription} variant="large" className="mb-8 text-coolGray-400" />
            <Link
              className="inline-flex items-center justify-center px-7 py-3 h-14 w-full md:w-auto mb-2 md:mb-0 md:mr-4 text-lg leading-7 text-blue-50 bg-blue-500 hover:bg-blue-600 font-medium focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105"
              href={ctaButtonLink}
            >
              {ctaButtonText}
            </Link>
          </div>
        </div>
      </div>
      <div className="h-64 bg-blue-500" />
    </section>
  );
}
