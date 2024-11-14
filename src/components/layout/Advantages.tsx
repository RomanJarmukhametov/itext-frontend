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

interface AdvantagesProps {
  id: number;
  documentId: string;
  __component: string;
  tagline: string;
  heading: string;
  description: string;
  card: CardProps[];
}

export default function Advantages({ data }: { readonly data: AdvantagesProps }) {
  const { tagline, heading, description, card } = data;

  return (
    <section
      className="py-24 md:pb-32 bg-coolGray-50 bg-pattern-light"
      aria-labelledby="advantages-heading"
    >
      <div className="container px-4 mx-auto">
        <div className="md:max-w-4xl mb-12 mx-auto text-center">
          <Tagline text={tagline} />
          <Heading level={2} id="advantages-heading">
            {heading}
          </Heading>

          <BodyText text={description} variant="large" />
        </div>
        <div className="flex flex-wrap -mx-4">
          {card.map((item) => (
            <div key={item.id} className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="h-full p-8 text-center hover:bg-white hover:shadow-xl hover:scale-105 rounded-md transition duration-200">
                {getIcon(item.icon)}
                <Heading level={3}>{item.heading}</Heading>
                <BodyText text={item.description} variant="normal" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
