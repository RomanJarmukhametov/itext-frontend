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

  const validatedFields = schemaRegister.safeParse({
    userName: formData.get('userName'),
    userEmail: formData.get('userEmail'),
    userPhone: formData.get('userPhone'),
    sourceLanguage: formData.get('sourceLanguage'),
    targetLanguage: formData.get('targetLanguage'),
    userMessage: formData.get('userMessage'),
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      strapiErrors: null,
      message: 'Failed to send an order. Please check the form fields.',
    };
  }

  // Pass `FormData` to the service for file upload support
  const orderData = {
    userName: formData.get('userName') as string,
    userEmail: formData.get('userEmail') as string,
    userPhone: formData.get('userPhone') as string,
    sourceLanguage: formData.get('sourceLanguage') as string,
    targetLanguage: formData.get('targetLanguage') as string,
    userMessage: formData.get('userMessage') as string,
  };

  const responseData = await OrderService(orderData);

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
