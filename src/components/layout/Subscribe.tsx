import Heading from '@/components/common/Heading';
import BodyText from '@/components/common/BodyText';
import SubscribeForm from '@/components/layout/SubscribeForm';

export default function Subscribe() {
  return (
    <section className="py-24 bg-coolGray-50 bg-pattern-light-one">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-10 md:mb-0">
            <Heading level={2}>Подпишитесь на наш блог</Heading>
            <BodyText
              variant="large"
              text="Будьте в курсе новостей, статей и полезных советов из мира переводческих услуг."
            />
          </div>
          <SubscribeForm />
        </div>
      </div>
    </section>
  );
}
