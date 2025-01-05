/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use server';

import { z } from 'zod';
import { OrderService } from '@/data/services/order-service';

const schemaRegister = z.object({
  userName: z.string().min(2, {
    message: 'Имя не должно быть пустым',
  }),
  userEmail: z.string().email({
    message: 'Введите правильный адрес электронной почты',
  }),
  userPhone: z.string().min(10, {
    message: 'Введите правильный номер телефона',
  }),
  sourceLanguage: z.string().min(2, {
    message: 'Выберите язык',
  }),
  targetLanguage: z.string().min(2, {
    message: 'Выберите язык',
  }),
  userMessage: z.string(), // Optional field
  userFiles: z.array(z.object({ id: z.number() })).optional(), // Validate uploaded file IDs
});

export async function orderAction(prevState: any, formData: FormData) {
  // Check if the honeypot field is filled (bot detection)
  const honeypot = formData.get('honeypot');
  if (honeypot) {
    return {
      ...prevState,
      message: 'Bot detected. Submission rejected.',
    };
  }

  // Parse order data (including uploaded file IDs) from FormData
  const parsedData = JSON.parse(formData.get('data') as string);

  const validatedFields = schemaRegister.safeParse(parsedData);

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      strapiErrors: null,
      message: 'Failed to send an order. Please check the form fields.',
    };
  }

  const responseData = await OrderService(validatedFields.data);

  if (!responseData) {
    return {
      ...prevState,
      strapiErrors: null,
      zodErrors: null,
      message: 'Something went wrong. Please try again later.',
    };
  }

  if (responseData.error) {
    return {
      ...prevState,
      strapiErrors: responseData.error,
      zodErrors: null,
      message: 'Не удалось отправить заказ.',
    };
  }

  return {
    ...prevState,
    toastMessage: responseData.error
      ? 'Не удалось отправить заказ.'
      : 'Заказ успешно отправлен. Мы с Вами скоро свяжемся!',
    toastType: responseData.error ? 'error' : 'success',
  };
}
