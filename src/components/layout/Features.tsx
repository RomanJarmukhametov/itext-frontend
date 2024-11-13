import { getIcon } from '@/lib/icons';

interface CardProps {
  id: number;
  icon: string;
  heading: string;
  description: string;
}

interface FeatureProps {
  id: number;
  documentId: string;
  __component: string;
  tagline: string;
  heading: string;
  description: string;
  card: CardProps[];
}

export default function Features({ data }: { readonly data: FeatureProps }) {
  const { tagline, heading, description, card } = data;

  return (
    <section className="py-24 md:pb-32 bg-coolGray-50 bg-pattern-light">
      <div className="container px-4 mx-auto">
        {/* Section Heading */}
        <div className="md:max-w-4xl mb-12 mx-auto text-center">
          <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-blue-500 bg-blue-100 font-medium uppercase rounded-full shadow-sm">
            {tagline}
          </span>
          <h2 className="mb-4 text-3xl md:text-4xl font-bold leading-relaxed tracking-wide">
            {heading}
          </h2>
          <p className="text-lg md:text-xl text-coolGray-500 font-medium">{description}</p>
        </div>
        {/* Cards Section */}
        <div className="flex flex-wrap -mx-4">
          {card.map((item) => (
            <div key={item.id} className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="h-full p-8 text-center hover:bg-white hover:shadow-xl hover:scale-105 rounded-md transition duration-200">
                {getIcon(item.icon)}
                <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">{item.heading}</h3>
                <p className="text-coolGray-500 font-medium">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
