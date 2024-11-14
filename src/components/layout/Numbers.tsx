import Heading from '@/components/common/Heading';
import Tagline from '@/components/common/Tagline';
import BodyText from '@/components/common/BodyText';
interface StatsProps {
  id: number;
  number: string;
  description: string;
}

interface NumbersProps {
  id: number;
  documentId: string;
  __component: string;
  tagline: string;
  heading: string;
  description: string;
  stats: StatsProps[];
}

export default function Numbers({ data }: { readonly data: NumbersProps }) {
  const { tagline, heading, description, stats } = data;

  return (
    <section
      className="py-20 xl:pt-24 xl:pb-32 bg-white bg-pattern-white"
      aria-labelledby="numbers-heading"
    >
      <div className="container px-4 mx-auto">
        <div className="text-center">
          <Tagline text={tagline} />
          <Heading level={2} id="numbers-heading">
            {heading}
          </Heading>
          <BodyText
            text={description}
            variant="large"
            className="mb-16 xl:mb-24 mx-auto max-w-4xl"
          />
          <div className="flex flex-wrap justify-center -mx-4">
            {stats.map((item) => (
              <div key={item.id} className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 lg:mb-0">
                <h2 className="mb-2 text-4xl md:text-5xl text-blue-600 font-bold tracking-tighter">
                  {item.number}
                </h2>
                <BodyText text={item.description} variant="large" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
