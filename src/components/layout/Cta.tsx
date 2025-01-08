import Image from 'next/image';
import Link from 'next/link';
import Heading from '@/components/common/Heading';
import BodyText from '@/components/common/BodyText';
import CtaPrimaryButton from '@/components/common/CtaPrimaryButton';

interface CtaProps {
  id: number;
  documentId: string;
  __component: string;
  heading: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

export default function Cta({ data }: { readonly data: CtaProps }) {
  const { heading, description, primaryButtonText, secondaryButtonText, secondaryButtonLink } =
    data;
  return (
    <section className="relative py-16 bg-coolGray-900" aria-labelledby="cta-heading">
      <div className="absolute bottom-0 left-0 h-1/2 w-full bg-coolGray-100" />
      <div className="container px-4 mx-auto">
        <div className="relative py-16 px-4 md:px-24 bg-coolGray-50 rounded-xl">
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="/images/pattern-light1.svg"
            alt=""
            width={0}
            height={0}
          />
          <div className="relative flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-14 lg:mb-0">
              <div className="max-w-md">
                <Heading id="cta-heading" level={2}>
                  {heading}
                </Heading>
                <BodyText text={description} variant="large" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="flex flex-wrap items-center lg:justify-end">
                <CtaPrimaryButton text={primaryButtonText} />

                <Link
                  className="inline-flex items-center justify-center px-7 py-3 h-14 w-full md:w-auto text-lg leading-7 text-coolGray-800 bg-white hover:bg-coolGray-100 font-medium focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border border-coolGray-200 rounded-md shadow-sm transition duration-300 ease-in-out"
                  href={secondaryButtonLink}
                >
                  {secondaryButtonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
