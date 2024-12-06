import { StrapiImage } from '@/components/common/StrapiImage';
import Heading from '@/components/common/Heading';
import BodyText from '@/components/common/BodyText';

interface ImageProps {
  id: number;
  url: string;
  alternativeText: string;
}

interface PageHeaderProps {
  id: number;
  documentId: string;
  __component: string;
  tagline: string;
  heading: string;
  description: string;
  image: ImageProps;
}

export default function PageHeader({ data }: { readonly data: PageHeaderProps }) {
  const { tagline, heading, description, image } = data;
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
              <BodyText variant="large" className="mb-8" text={description} />

              <div className="flex flex-wrap">
                <div className="w-full md:w-auto py-1 md:py-0 md:mr-4 removed" />
                <div className="w-full md:w-auto py-1 md:py-0 removed" />
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
