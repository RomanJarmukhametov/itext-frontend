import Link from 'next/link';
import { StrapiImage } from '@/components/common/StrapiImage';

interface ImageProps {
  url: string;
  alternativeText: string;
}

interface NavItem {
  id: number;
  label: string;
  link: string;
}

interface NavigationData {
  navItem: NavItem[];
  logoBlack: ImageProps;
  logoWhite: ImageProps;
  button: string;
}

export default function Footer({ navigationData }: { navigationData: NavigationData }) {
  return (
    <footer
      className="bg-coolGray-900 bg-pattern-dark"
      aria-label="Footer navigation and company information"
    >
      <div className="container px-4 mx-auto">
        <div className="pt-24 pb-11 mx-auto max-w-7xl">
          <Link className="block md:mx-auto mb-5 max-w-max" href="/">
            <span className="sr-only">Бюро переводов iText</span>
            <StrapiImage
              className="h-auto w-auto"
              src={navigationData.logoWhite.url}
              alt={navigationData.logoWhite.alternativeText}
              height={38}
              width={112}
            />
          </Link>
          <div className="flex flex-wrap justify-center -mx-3 lg:-mx-6">
            {navigationData.navItem.map((item) => (
              <div key={item.id} className="w-full md:w-auto p-3 md:px-6">
                <Link
                  className="inline-block text-lg md:text-xl text-coolGray-400 hover:text-white hover:underline font-medium transition-colors duration-200"
                  href={item.link}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-b border-coolGray-800" />
      <div className="container px-4 mx-auto">
        <p className="py-10 md:pb-20 text-lg md:text-xl text-coolGray-400 font-medium text-center">
          © {currentYear()} ТОО iText. Все права защищены
        </p>
      </div>
    </footer>
  );
}

function currentYear() {
  return new Date().getFullYear();
}
