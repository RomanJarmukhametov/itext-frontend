import Heading from '@/components/common/Heading';
import Tagline from '@/components/common/Tagline';
import BodyText from '@/components/common/BodyText';
import RatingWidgetLarge from '@/components/common/RatingWidgetLarge';

interface ReviewsProps {
  id: number;
  documentId: string;
  __component: string;
  tagline: string;
  heading: string;
  description: string;
}

export default function Reviews({ data }: { readonly data: ReviewsProps }) {
  const { tagline, heading, description } = data;
  return (
    <section className="py-24 md:pb-28 bg-white bg-pattern-light" aria-labelledby="reviews-heading">
      <div className="container px-4 mx-auto text-center">
        <div className="mb-16">
          <Tagline text={tagline} />
          <Heading level={2} id="reviews-heading">
            {heading}
          </Heading>
          <BodyText text={description} variant="large" />
        </div>
        <div className="flex justify-center">
          <div className="w-full md:w-auto">
            <div className="flex flex-col h-full bg-white shadow-md rounded-md items-center">
              <RatingWidgetLarge />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
