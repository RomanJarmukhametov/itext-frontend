import Link from 'next/link';
export default function SubscribeForm() {
  return (
    <div className="w-full md:w-1/2 px-4">
      <div className="mx-auto md:mr-0 md:max-w-md">
        <div className="flex flex-wrap mb-1">
          <div className="w-full md:flex-1 mb-3 md:mb-0 md:mr-6">
            <input
              className="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border border-coolGray-200 rounded-lg shadow-xsm"
              type="text"
              placeholder="Введите ваш email"
            />
          </div>
          <div className="w-full md:w-auto">
            <a
              className="inline-block py-3 px-5 w-full leading-5 text-white bg-blue-500 hover:bg-blue-600 font-medium text-center focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm"
              href="#"
            >
              Подписаться
            </a>
          </div>
        </div>
        <span className="text-xs text-coolGray-500 font-medium">
          <span>Мы заботимся о ваших данных. Ознакомьтесь с нашими</span>
          <Link className="text-blue-500 hover:text-blue-600" href="/terms-of-service">
            Условиями обслуживания
          </Link>
          .
        </span>
      </div>
    </div>
  );
}
