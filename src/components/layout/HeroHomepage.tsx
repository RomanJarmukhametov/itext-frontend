import Link from 'next/link';
import { StrapiImage } from '@/components/common/StrapiImage';
import RatingWidgetSmall from '@/components/common/RatingWidgetSmall';
import Heading from '@/components/common/Heading';
import BodyText from '@/components/common/BodyText';
import CtaPrimaryButton from '@/components/common/CtaPrimaryButton';

interface ImageProps {
  id: number;
  url: string;
  alternativeText: string;
}

interface HeroProps {
  id: number;
  documentId: string;
  __component: string;
  tagline: string;
  heading: string;
  description: string;
  buttonPrimary: string;
  buttonSecondary: string;
  buttonSecondaryLink: string;
  image: ImageProps;
}

export default function HeroHomepage({ data }: { readonly data: HeroProps }) {
  const {
    tagline,
    heading,
    description,
    buttonPrimary,
    buttonSecondary,
    buttonSecondaryLink,
    image,
  } = data;

  return (
    <section className="relative overflow-hidden bg-pattern-white" aria-labelledby="hero-heading">
      <div className="py-20 md:py-28">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap xl:items-center -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
              <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-blue-500 uppercase rounded-full">
                {tagline}
              </span>
              <Heading level={1} id="hero-heading">
                {heading}
              </Heading>
              <BodyText text={description} variant="large" className="mb-8" />
              <div className="flex flex-wrap">
                <div className="w-full md:w-auto py-1 md:py-0 md:mr-4">
                  <CtaPrimaryButton hero text={buttonPrimary} />
                </div>
                <div className="w-full md:w-auto py-1 md:py-0">
                  <Link
                    className="inline-block py-4 px-7 w-full text-base md:text-lg leading-4 text-coolGray-800 font-medium text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border border-coolGray-200 rounded-md shadow-sm  transition duration-300 ease-in-out"
                    href={buttonSecondaryLink}
                  >
                    {buttonSecondary}
                  </Link>
                </div>
              </div>
              <div className="mt-8">
                <RatingWidgetSmall />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="relative mx-auto md:mr-0 max-w-max">
                <StrapiImage
                  className="relative rounded-7xl"
                  src={image.url}
                  alt={image.alternativeText}
                  width={1200}
                  height={928}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
