/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { getIcon } from '@/lib/icons';
import { useActionState } from 'react';
import { useTransition, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import { orderAction } from '@/data/actions/order-action';
import { ZodErrors } from '@/components/common/ZodErrors';
import { StrapiErrors } from '@/components/common/StrapiErrors';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Fragment } from 'react';
import { Transition, TransitionChild } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface OrderFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const INITIAL_STATE = {
  data: null,
  toastMessage: null,
  toastType: null,
};

function FileUploader({ onFilesSelected }: { onFilesSelected: (files: File[]) => void }) {
  const [files, setFiles] = useState<File[]>([]);

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      const fileList = Array.from(event.target.files);
      setFiles(fileList);
      onFilesSelected(fileList); // Notify parent component
    }
  }

  function formatFileSize(size: number): string {
    if (size < 1024) return `${size} Bytes`;
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
  }

  return (
    <>
      <div className="mb-8">
        <label
          htmlFor="file-input"
          className="group flex p-6 items-center justify-center border-dashed border-2 h-52 border-coolGray-200 rounded-lg text-coolGray-300 cursor-pointer"
        >
          <div className="max-w-max text-center">
            <div className="inline-block mb-4">
              <span className="text-blue-500 group-hover:text-blue-600 transition-colors duration-200">
                {getIcon('FileUpload')}
              </span>
            </div>
            <p className="mb-2">
              <span className="text-coolGray-500">Перетащите файл или</span>{' '}
              <span className="text-blue-500 group-hover:text-blue-600 transition-colors duration-200 cursor-pointer">
                загрузите с компьютера
              </span>
            </p>
            <span className="text-sm text-coolGray-300 font-medium">
              Файлы в формате .pdf, .docx, .pptx, .xlsx, .jpg, .png
            </span>
          </div>
          <input
            id="file-input"
            type="file"
            className="hidden"
            onChange={handleFileChange}
            multiple
          />
        </label>
      </div>

      <div className="mb-8">
        <label className="block mb-2 text-coolGray-800 font-medium leading-6">Файлы</label>
        {files.length > 0 ? (
          files.map((file, index) => (
            <div
              key={index}
              className="p-6 mb-6 bg-white border border-coolGray-200 rounded-md shadow-md"
            >
              <div className="flex mb-3 flex-wrap items-center justify-between">
                <p className="flex w-full sm:w-auto mb-1 sm:mb-0 items-center">
                  {getIcon('File')}
                  <span className="ml-2 text-coolGray-800 font-medium">{file.name}</span>
                </p>
                <span className="text-coolGray-300">{formatFileSize(file.size)}</span>
              </div>
              <div className="relative w-full h-2 bg-darkCoolGray-100 rounded-full overflow-hidden">
                <div className="absolute top-0 bottom-0 left-0 w-3/12 bg-blue-500 rounded-full" />
              </div>
            </div>
          ))
        ) : (
          <p className="text-coolGray-500">Файлы не загружены.</p>
        )}
      </div>
    </>
  );
}

function FormFields({ formState }: { formState: any }) {
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

export default function OrderForm({ isOpen, onClose }: OrderFormProps) {
  const [formState, dispatchAction] = useActionState(orderAction, INITIAL_STATE);
  const [isPending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);
  const [toastDisplayed, setToastDisplayed] = useState(false); // Prevent duplicate toasts

  // Trigger toast notifications
  useEffect(() => {
    if (formState.toastMessage && !toastDisplayed) {
      // Ensure toast is displayed only once
      setToastDisplayed(true);

      if (formState.toastType === 'success') {
        toast.success(formState.toastMessage);
        setTimeout(() => {
          onClose(); // Close the dialog after displaying the toast
        }, 2000); // Adjust the timeout as needed
      } else {
        toast.error(formState.toastMessage);
      }

      // Clear the form on success
      if (formState.toastType === 'success' && formRef.current) {
        formRef.current.reset();
      }
    }
  }, [formState.toastMessage, formState.toastType, onClose, toastDisplayed]);

  const handleSubmit = (formData: FormData) => {
    startTransition(() => {
      setToastDisplayed(false);
      dispatchAction(formData);
    });
  };

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => {}}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" aria-hidden="true" />
        </TransitionChild>

        <div className="fixed inset-0 flex items-center justify-center">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel className="fixed top-0 left-0 w-full h-full px-4 py-16 md:py-24 bg-coolGray-900 bg-opacity-50 overflow-y-auto">
              <div className="relative max-w-4xl p-6 sm:p-10 mx-auto bg-coolGray-50 rounded-lg">
                <button
                  type="button"
                  className="absolute top-3 right-3 text-gray-400 hover:text-gray-500 focus:outline-none"
                  onClick={onClose}
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <form
                  ref={formRef}
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target as HTMLFormElement);
                    handleSubmit(formData);
                  }}
                  noValidate
                >
                  {/* Honeypot field (hidden from users) */}
                  <input
                    type="text"
                    name="honeypot"
                    className="hidden"
                    aria-hidden="true"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  <FormFields formState={formState} />
                  <FileUploader onFilesSelected={(files) => console.log(files)} />
                  <button
                    type="submit"
                    className={`py-3 px-7 w-full bg-blue-500 text-white rounded-md ${
                      isPending ? 'cursor-not-allowed opacity-70' : ''
                    }`}
                    disabled={isPending}
                  >
                    {isPending ? 'Отправка...' : 'Отправить'}
                  </button>
                </form>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
}
