'use client';

import { useActionState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useFormStatus } from 'react-dom';
import { subscribeUserAction } from '@/data/actions/subscribe-actions';
import { ZodErrors } from '@/components/common/ZodErrors';
import { StrapiErrors } from '@/components/common/StrapiErrors';
import Link from 'next/link';

const INITIAL_STATE = {
  data: null,
  toastMessage: null,
  toastType: null,
};

export default function SubscribeForm() {
  const [formState, formAction] = useActionState(subscribeUserAction, INITIAL_STATE);
  const { pending } = useFormStatus();

  // Trigger toast notifications after render when toastMessage changes
  useEffect(() => {
    if (formState.toastMessage) {
      if (formState.toastType === 'success') {
        toast.success(formState.toastMessage);
      } else {
        toast.error(formState.toastMessage);
      }
    }
  }, [formState.toastMessage, formState.toastType]); // Only re-run when toastMessage or toastType changes

  return (
    <div className="w-full md:w-1/2 px-4">
      <div className="mx-auto md:mr-0 md:max-w-md">
        <form action={formAction} noValidate className="flex flex-wrap mb-1">
          <div className="w-full md:flex-1 mb-3 md:mb-0 md:mr-6">
            {/* Honeypot field (hidden from users) */}
            <input
              type="text"
              name="honeypot"
              className="hidden"
              aria-hidden="true"
              tabIndex={-1}
              autoComplete="off"
            />

            <input
              type="email"
              name="userEmail"
              className="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border border-coolGray-200 rounded-lg shadow-xsm"
              placeholder="Введите ваш email"
              required
            />
          </div>
          <div className="w-full md:w-auto">
            <button
              type="submit"
              className="inline-block py-3 px-5 w-full leading-5 text-white bg-blue-500 hover:bg-blue-600 font-medium text-center focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm"
              disabled={pending} // Disable button during form submission
            >
              {pending ? 'Загрузка...' : 'Подписаться'}
            </button>
          </div>
          <div className="w-full mt-2">
            <ZodErrors error={formState?.zodErrors?.userEmail} />
            <StrapiErrors error={formState?.strapiErrors} />
          </div>
        </form>
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
