import Image from 'next/image';
import Link from 'next/link';
export default function NotFound() {
  return (
    <section
      className="relative py-24 md:py-44 lg:pt-56 lg:pb-72 bg-white bg-pattern-white"
      aria-labelledby="not-found-heading"
    >
      <div className="relative z-10 container px-4 mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-2/3">
            <div className="md:max-w-xl mx-auto text-center md:text-left">
              <span className="text-6xl md:text-7xl text-blue-500 leading-tight font-bold">
                404
              </span>
              <h2
                className="mb-4 text-4xl md:text-5xl leading-tight font-bold tracking-tighter"
                id="not-found-heading"
              >
                Страница не найдена
              </h2>
              <p className="mb-6 text-lg md:text-xl text-coolGray-500">
                Что-то пошло не так, поэтому эта страница не работает.
              </p>
              <div className="flex flex-wrap">
                <div className="w-full md:w-auto py-1 md:py-0 md:mr-6">
                  <Link
                    className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-blue-50 font-medium text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border border-blue-500 rounded-md shadow-sm"
                    href="/"
                  >
                    На главную страницу
                  </Link>
                </div>
                <div className="w-full md:w-auto py-1 md:py-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        className="absolute top-0 left-0 w-28 md:w-auto"
        src="images/wave2-yellow.svg"
        width={0}
        height={0}
        alt=""
      />
      <Image
        className="absolute right-6 top-6 w-28 md:w-auto"
        src="images/dots3-green.svg"
        alt=""
        width={0}
        height={0}
      />
      <Image
        className="absolute right-0 bottom-0 w-28 md:w-auto"
        src="images/wave3-red.svg"
        alt=""
        width={0}
        height={0}
      />
      <Image
        className="absolute left-6 bottom-6 w-28 md:w-auto"
        src="images/dots3-violet.svg"
        alt=""
        width={0}
        height={0}
      />
    </section>
  );
}
