import Heading from '@/components/common/Heading';
import Tagline from '@/components/common/Tagline';
import BodyText from '@/components/common/BodyText';

interface CardProps {
  id: number;
  number: string;
  title: string;
  description: string;
}

interface ValuesProps {
  id: number;
  documentId: string;
  __component: string;
  tagline: string;
  heading: string;
  description: string;
  valueCard: CardProps[];
}

export default function Values({ data }: { readonly data: ValuesProps }) {
  const { tagline, heading, description, valueCard } = data;
  return (
    <section className="py-24 bg-coolGray-50 bg-pattern-light" aria-labelledby="values-heading">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto text-center mb-16 md:mb-24">
          <Tagline text={tagline} />
          <Heading level={2} id="values-heading">
            {heading}
          </Heading>
          <BodyText text={description} variant="large" />
        </div>
        <div className="flex flex-wrap -mx-4">
          {valueCard.map((item) => (
            <div key={item.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-16">
              <div className="relative h-full px-8 pt-14 pb-8 bg-white rounded-md shadow-md">
                <div className="absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 inline-flex items-center justify-center h-16 w-16 bg-coolGray-50 rounded-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full text-xl font-semibold text-white">
                    {item.number}
                  </div>
                </div>
                <Heading level={3} className="mt-8 mb-4">
                  {item.title}
                </Heading>
                <BodyText text={item.description} variant="normal" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
