/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useState } from 'react';
import { ZodErrors } from '@/components/common/ZodErrors';
import { StrapiErrors } from '@/components/common/StrapiErrors';

function formatPhoneNumber(value: string): string {
  const cleaned = value.replace(/\D/g, ''); // Remove non-numeric characters
  const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);
  if (match) {
    return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`;
  }
  return value;
}

export default function FormFields({ formState }: { formState: any }) {
  const languages = [
    { value: '', label: 'Выберите язык' },
    { value: 'Казахский', label: 'Казахский' },
    { value: 'Русский', label: 'Русский' },
    { value: 'Английский', label: 'Английский' },
    { value: 'Узбекский', label: 'Узбекский' },
    { vaue: 'Киргизский', label: 'Киргизский' },
    { value: 'Азербайджанский', label: 'Азербайджанский' },
    { value: 'Немецкий', label: 'Немецкий' },
    { value: 'Французский', label: 'Французский' },
    { value: 'Испанский', label: 'Испанский' },
    { value: 'Итальянский', label: 'Итальянский' },
    { value: 'Португальский', label: 'Португальский' },
    { value: 'Польский', label: 'Польский' },
    { value: 'Нидерландский', label: 'Нидерландский' },
    { value: 'Чешский', label: 'Чешский' },
    { value: 'Шведский', label: 'Шведский' },
    { value: 'Финский', label: 'Финский' },
    { value: 'Датский', label: 'Датский' },
    { value: 'Греческий', label: 'Греческий' },
    { value: 'Венгерский', label: 'Венгерский' },
    { value: 'Румынский', label: 'Румынский' },
    { value: 'Словацкий', label: 'Словацкий' },
    { value: 'Литовский', label: 'Литовский' },
    { value: 'Латышский', label: 'Латышский' },
    { value: 'Эстонский', label: 'Эстонский' },
    { value: 'Украинский', label: 'Украинский' },
    { value: 'Турецкий', label: 'Турецкий' },
    { value: 'Арабский', label: 'Арабский' },
    { value: 'Китайский', label: 'Китайский' },
    { value: 'Японский', label: 'Японский' },
    { value: 'Корейский', label: 'Корейский' },
  ];

  const [phone, setPhone] = useState('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhoneNumber(e.target.value));
  };

  const [sourceLanguage, setSourceLanguage] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('');

  const handleSourceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSourceLanguage(value);
    if (value === targetLanguage) {
      setTargetLanguage(''); // Reset target language if it matches the new source language
    }
  };

  const handleTargetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setTargetLanguage(value);
    if (value === sourceLanguage) {
      setSourceLanguage(''); // Reset source language if it matches the new target language
    }
  };

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
          placeholder="+7 (___) ___-__-__"
          value={phone}
          onChange={handlePhoneChange}
        />
        <ZodErrors error={formState?.zodErrors?.userPhone} />
        <StrapiErrors error={formState?.strapiErrors} />
      </div>

      <div className="flex flex-wrap -mx-4 mb-8">
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
          <label className="block mb-2 text-coolGray-800 font-medium leading-6">
            Исходный язык
          </label>
          <select
            className="block w-full py-2 px-3 border rounded-lg"
            name="sourceLanguage"
            value={sourceLanguage}
            onChange={handleSourceChange}
          >
            {languages.map((lang, index) => (
              <option
                key={`${lang.value}-${index}`}
                value={lang.value}
                disabled={lang.value === targetLanguage}
              >
                {lang.label}
              </option>
            ))}
          </select>
          <ZodErrors error={formState?.zodErrors?.sourceLanguage} />
          <StrapiErrors error={formState?.strapiErrors} />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <label className="block mb-2 text-coolGray-800 font-medium leading-6">Целевой язык</label>
          <select
            className="block w-full py-2 px-3 border rounded-lg"
            name="targetLanguage"
            value={targetLanguage}
            onChange={handleTargetChange}
          >
            {languages.map((lang, index) => (
              <option
                key={`${lang.value}-${index}`}
                value={lang.value}
                disabled={lang.value === sourceLanguage}
              >
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
