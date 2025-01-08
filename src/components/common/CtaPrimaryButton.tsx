'use client';
import { useState } from 'react';
import OrderForm from '@/components/layout/OrderForm';

interface CtaPrimaryButtonProps {
  text: string;
  hero?: boolean;
}

export default function CtaPrimaryButton({ text, hero = false }: CtaPrimaryButtonProps) {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={
          hero
            ? 'inline-block py-4 px-7 w-full text-base md:text-lg leading-4 text-blue-50 font-medium text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border border-blue-500 rounded-md shadow-sm transition duration-300 ease-in-out'
            : 'inline-flex items-center justify-center px-7 py-3 h-14 w-full md:w-auto mb-2 md:mb-0 md:mr-4 text-lg leading-7 text-blue-50 bg-blue-500 hover:bg-blue-600 font-medium focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm transition duration-300 ease-in-out'
        }
        onClick={() => setDialogOpen(true)}
      >
        {text}
      </button>
      <OrderForm isOpen={dialogOpen} onClose={() => setDialogOpen(false)} />
    </>
  );
}
