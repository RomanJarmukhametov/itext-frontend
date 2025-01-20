import type { Metadata } from 'next';
import Link from 'next/link';
import { getContactPageData } from '@/data/loaders';
import { getIcon } from '@/lib/icons';
import AnimatedSection from '@/components/common/AnimatedSection';
import { StrapiImage } from '@/components/common/StrapiImage';
import Tagline from '@/components/common/Tagline';
import Heading from '@/components/common/Heading';
import BodyText from '@/components/common/BodyText';

interface SafeMetadata {
  title: string;
  description: string;
}
const EMAIL_SUBJECT = 'Заказ перевода с сайта itext.kz';
const EMAIL_BODY = `Здравствуйте,\n\nНеобходимо перевести следующие документы:`;

export default async function Contacts() {
  const strapiData = await getContactPageData();

  const { title, description, pageHeader, email, phone, address, image } = strapiData?.data || {};

  // Metadata object for dynamic SEO
  const metadata: Metadata = {
    title: title || 'Default Title',
    description: description || 'Default Description',
  };

  // JSON-LD for the contact page
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'iText Translation Bureau',
    url: 'https://itext.agency',
    logo: 'https://itext.agency/images/logo.png',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: phone,
        contactType: 'Customer Service',
        areaServed: 'KZ',
        availableLanguage: 'Russian',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: address || 'Пл. Победы 25, офис 106',
      addressLocality: 'Павлодар',
      addressRegion: 'Павлодарская область',
      postalCode: '140000',
      addressCountry: 'KZ',
    },
  };

  return (
    <>
      <MetadataRenderer metadata={metadata as SafeMetadata} />

      <AnimatedSection>
        <section className="pt-20 bg-coolGray-50 bg-pattern-light-one">
          {/* JSON-LD script tag */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <Tagline text={pageHeader.tagline} />
              <Heading level={1}>{pageHeader.title}</Heading>
              <BodyText variant="large" text={pageHeader.description} />
            </div>
            <div className="flex flex-wrap -mx-4 pb-16">
              <div className="w-full md:w-1/4 px-4 mb-10 md:mb-0">
                <div className="max-w-xs mx-auto text-center">
                  {getIcon('Email')}
                  <h3 className="mb-2 text-2xl md:text-3xl leading-9 text-coolGray-800 font-bold">
                    Email
                  </h3>
                  <address className="not-italic">
                    <Link
                      className="text-xl text-coolGray-500 hover:text-sky-500 font-medium transition-colors duration-200 ease-in-out"
                      href={`mailto:${email}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`}
                    >
                      {email}
                    </Link>
                  </address>
                </div>
              </div>
              <div className="w-full md:w-1/4 px-4 mb-10 md:mb-0">
                <div className="max-w-xs mx-auto text-center">
                  {getIcon('Phone')}
                  <h3 className="mb-2 text-2xl md:text-3xl leading-9 text-coolGray-800 font-bold">
                    Телефон
                  </h3>
                  <address className="not-italic">
                    <Link
                      className="text-xl text-coolGray-500 hover:text-sky-500 font-medium transition-colors duration-200 ease-in-out"
                      href={`tel:${phone}`}
                    >
                      {phone}
                    </Link>
                  </address>
                </div>
              </div>
              <div className="w-full md:w-1/4 px-4">
                <div className="max-w-xs mx-auto text-center">
                  {getIcon('WhatsApp')}
                  <h3 className="mb-3 text-2xl md:text-3xl font-bold leading-9 text-coolGray-900">
                    WhatsApp
                  </h3>
                  <address className="not-italic">
                    <Link
                      className="text-xl text-coolGray-500 hover:text-sky-500 font-medium transition-colors duration-200 ease-in-out"
                      href="https://wa.me/77712672155"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Написать в WhatsApp
                    </Link>
                  </address>
                </div>
              </div>
              <div className="w-full md:w-1/4 px-4">
                <div className="max-w-xs mx-auto text-center">
                  {getIcon('Address')}
                  <h3 className="mb-3 text-2xl md:text-3xl font-bold leading-9 text-coolGray-900">
                    Адрес
                  </h3>
                  <address className="not-italic">
                    <BodyText variant="large" text={address} />
                  </address>
                </div>
              </div>
            </div>
            <StrapiImage
              className="relative mx-auto h-72 md:h-auto -mb-32 md:-mb-80 object-cover"
              src={image.url}
              alt={image.alternativeText}
              width={1712}
              height={960}
              priority
            />
          </div>
          <div className="py-24 md:py-64 bg-blue-500" />
        </section>
      </AnimatedSection>
    </>
  );
}

// Utility Component to Render Metadata
function MetadataRenderer({ metadata }: { metadata: SafeMetadata }) {
  return (
    <>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
    </>
  );
}
