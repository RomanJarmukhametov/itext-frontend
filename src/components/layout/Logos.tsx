import { StrapiImage } from '@/components/common/StrapiImage';

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
          <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-blue-500 bg-blue-100 font-medium uppercase rounded-full shadow-sm">
            {tagline}
          </span>
          <h2 className="mb-4 text-3xl md:text-4xl font-bold leading-relaxed tracking-wide">
            {heading}
          </h2>
          <p className="text-lg md:text-xl text-coolGray-500 font-medium">{description}</p>
        </div>
        <div className="flex flex-wrap justify-center -mx-4">
          {shuffledImages.map((item) => (
            <div key={item.id} className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0">
              <div className="flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md bg-coolGray-50 shadow-md">
                <StrapiImage
                  className="mx-auto"
                  src={item.url}
                  alt={item.alternativeText}
                  width={144}
                  height={0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
