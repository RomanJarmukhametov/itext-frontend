'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { StrapiImage } from '@/components/common/StrapiImage';
import Link from 'next/link';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

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

export default function Header({ navigationData }: { navigationData: NavigationData }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="container mx-auto flex items-center justify-between gap-x-6 p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Бюро переводов iText</span>
            <StrapiImage
              className="h-auto w-auto"
              src={navigationData.logoBlack.url}
              alt={navigationData.logoBlack.alternativeText}
              height={38}
              width={112}
            />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigationData.navItem.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className={clsx(
                'relative text-coolGray-500 hover:text-blue-500 font-medium',
                pathname === item.link ? 'active-link' : ''
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          <button
            type="button"
            className="inline-block py-2 px-4 text-sm leading-5 text-blue-50 bg-blue-500 hover:bg-blue-600 font-medium focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md transition duration-300 ease-in-out"
          >
            {navigationData.button}
          </button>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-coolGray-700"
          >
            <span className="sr-only">Открыть меню</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-coolGray-900/10">
          <div className="flex items-center gap-x-6">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Бюро переводов iText</span>
              <StrapiImage
                src={navigationData.logoBlack.url}
                alt={navigationData.logoBlack.alternativeText}
                height={38}
                width={112}
              />
            </Link>
            <button
              type="button"
              className="ml-auto rounded-md py-2 px-4 text-sm shadow-sm text-blue-50 bg-blue-500 hover:bg-blue-600 font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus:ring-opacity-50 transition duration-300 ease-in-out"
            >
              {navigationData.button}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-coolGray-700"
            >
              <span className="sr-only">Закрыть меню</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-coolGray-500/10">
              <div className="space-y-2 py-6">
                {navigationData.navItem.map((item) => (
                  <Link
                    key={item.id}
                    href={item.link}
                    className={clsx(
                      '-mx-3 block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50',
                      pathname === item.link ? 'border-l-4 border-blue-500' : 'border-transparent'
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
