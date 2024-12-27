/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use server';

import { z } from 'zod';
import { subscribeUserService } from '@/data/services/subscribe-service';
// import { toast } from 'react-toastify';

const schemaRegister = z.object({
  userEmail: z.string().email({
    message: 'Введите правильный адрес электронной почты',
  }),
});

export async function subscribeUserAction(prevState: any, formData: FormData) {
  // Check if the honeypot field is filled (bot detection)
  const honeypot = formData.get('honeypot');
  if (honeypot) {
    return {
      ...prevState,
      message: 'Bot detected. Submission rejected.',
    };
  }

  const validatedFields = schemaRegister.safeParse({
    userEmail: formData.get('userEmail'),
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      strapiErrors: null,
      message: 'Failed to subscribe user',
    };
  }

  const responseData = await subscribeUserService(validatedFields.data);

  if (!responseData) {
    return {
      ...prevState,
      strapiErrors: null,
      zodErrors: null,
      message: 'Упс! Что-то пошло не так. Пожалуйста, попробуйте еще раз.',
    };
  }

  if (responseData.error) {
    return {
      ...prevState,
      strapiErrors: responseData.error,
      zodErrors: null,
      message: 'Не удалось выполнить подписку.',
    };
  }

  return {
    ...prevState,
    toastMessage: responseData.error
      ? 'Не удалось выполнить подписку.'
      : 'Вы успешно подписались на рассылку!',
    toastType: responseData.error ? 'error' : 'success',
  };
}
