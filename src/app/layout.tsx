import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Roboto } from 'next/font/google';
import '@/assets/styles/globals.css';
import { getNavigationData } from '@/data/loaders';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import { ToastContainer } from 'react-toastify';

export const metadata: Metadata = {
  title: 'itext.kz',
  description:
    'Бюро переводов iText предлагает профессиональные языковые решения для вашего бизнеса. Мы являемся отраслевыми экспертами и выполняем переводы неизменно высокого качества так быстро, как вам это необходимо, на 50 языков во многих областях знаний. Сэкономьте время и деньги, закажите перевод у нас.',
};

const roboto = Roboto({
  subsets: ['latin', 'cyrillic-ext', 'greek'],
  display: 'swap',
  weight: ['100', '300', '400', '500', '700', '900'],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navigationData = await getNavigationData();

  return (
    <html
      lang="ru"
      className={`${roboto.className} antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || 'default-ga-id'} />
        <Header navigationData={navigationData.data} />
        <main className="flex-grow">{children}</main>
        <SpeedInsights />
        <Footer navigationData={navigationData.data} />
        <ToastContainer />
      </body>
    </html>
  );
}
