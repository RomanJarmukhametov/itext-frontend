/* eslint-disable @typescript-eslint/no-explicit-any */
import { ZodErrors } from '@/components/common/ZodErrors';
import { StrapiErrors } from '@/components/common/StrapiErrors';

export default function FormFields({ formState }: { formState: any }) {
  const languages = [
    { value: '', label: 'Выберите язык' },
    { value: 'ru', label: 'Русский' },
    { value: 'en', label: 'Английский' },
    { value: 'fr', label: 'Французский' },
    { value: 'de', label: 'Немецкий' },
    { value: 'es', label: 'Испанский' },
    { value: 'zh', label: 'Китайский' },
    { value: 'ja', label: 'Японский' },
    { value: 'it', label: 'Итальянский' },
    { value: 'pt', label: 'Португальский' },
    // Add more languages as needed
  ];

  return (
    <>
      <div className="flex flex-wrap -mx-4 mb-8">
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
          <label className="block mb-2 text-coolGray-800 font-medium leading-6">Ваше имя</label>
          <input
            className="block w-full py-2 px-3 border rounded-lg"
            type="text"
            name="userName"
            placeholder="Ваше имя"
          />
          <ZodErrors error={formState?.zodErrors?.userName} />
          <StrapiErrors error={formState?.strapiErrors} />
        </div>

        <div className="w-full md:w-1/2 px-4">
          <label className="block mb-2 text-coolGray-800 font-medium leading-6">Ваш Email</label>
          <input
            className="block w-full py-2 px-3 border rounded-lg"
            type="email"
            name="userEmail"
            placeholder="Ваш Email"
          />
          <ZodErrors error={formState?.zodErrors?.userEmail} />
          <StrapiErrors error={formState?.strapiErrors} />
        </div>
      </div>
      <div className="mb-8">
        <label className="block mb-2 text-coolGray-800 font-medium leading-6">Ваш телефон</label>
        <input
          className="block w-full py-2 px-3 border rounded-lg"
          type="tel"
          name="userPhone"
          placeholder="Ваш телефон"
        />
        <ZodErrors error={formState?.zodErrors?.userPhone} />
        <StrapiErrors error={formState?.strapiErrors} />
      </div>
      <div className="flex flex-wrap -mx-4 mb-8">
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
          <label className="block mb-2 text-coolGray-800 font-medium leading-6">
            Исходный язык
          </label>
          <select className="block w-full py-2 px-3 border rounded-lg" name="sourceLanguage">
            {languages.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>
          <ZodErrors error={formState?.zodErrors?.sourceLanguage} />
          <StrapiErrors error={formState?.strapiErrors} />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <label className="block mb-2 text-coolGray-800 font-medium leading-6">Целевой язык</label>
          <select className="block w-full py-2 px-3 border rounded-lg" name="targetLanguage">
            {languages.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>
          <ZodErrors error={formState?.zodErrors?.targetLanguage} />
          <StrapiErrors error={formState?.strapiErrors} />
        </div>
      </div>
      <div className="mb-8">
        <label className="block mb-2 text-coolGray-800 font-medium leading-6" htmlFor="">
          Сообщение
        </label>
        <textarea
          className="block h-40 w-full py-2 px-3 appearance-none border border-coolGray-200 rounded-lg shadow-md text-coolGray-700 leading-6 placeholder-coolGray-300 focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 resize-none"
          placeholder="Опишите заказ"
          name="userMessage"
          defaultValue={''}
        />
      </div>
    </>
  );
}
