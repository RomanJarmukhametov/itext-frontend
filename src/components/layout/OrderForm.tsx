import { useState } from 'react';
import { useActionState } from 'react';
import { useTransition, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import { orderAction } from '@/data/actions/order-action';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Fragment } from 'react';
import { Transition, TransitionChild } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import FileUploader from '@/components/common/FileUploader';
import FormFields from '@/components/common/FormFields';

interface OrderFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const INITIAL_STATE = {
  data: null,
  toastMessage: null,
  toastType: null,
};

export default function OrderForm({ isOpen, onClose }: OrderFormProps) {
  const [formState, dispatchAction] = useActionState(orderAction, INITIAL_STATE);
  const [isPending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);
  const [toastDisplayed, setToastDisplayed] = useState(false); // Prevent duplicate toasts

  // Trigger toast notifications
  useEffect(() => {
    if (formState.toastMessage && !toastDisplayed) {
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
        localStorage.removeItem('uploadedFileIds'); // Clear uploaded file IDs
      }
    }
  }, [formState.toastMessage, formState.toastType, onClose, toastDisplayed]);

  const handleSubmit = (formData: FormData) => {
    startTransition(() => {
      setToastDisplayed(false);

      // Retrieve file IDs from local storage
      const uploadedFileIDs = localStorage.getItem('uploadedFileIds')
        ? JSON.parse(localStorage.getItem('uploadedFileIds') || '[]').map((id: { id: number }) => ({
            id: id.id,
          }))
        : [];

      // Construct order data with file IDs
      const orderData = {
        userName: formData.get('userName'),
        userEmail: formData.get('userEmail'),
        userPhone: formData.get('userPhone'),
        sourceLanguage: formData.get('sourceLanguage'),
        targetLanguage: formData.get('targetLanguage'),
        userMessage: formData.get('userMessage'),
        userFiles: uploadedFileIDs, // Include file IDs
      };

      // Add JSON data to FormData
      formData.set('data', JSON.stringify(orderData));

      // Dispatch action to submit form
      dispatchAction(formData);

      // Clear uploaded file IDs from local storage after submission
      localStorage.removeItem('uploadedFileIds');
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
                  <FileUploader
                    onFilesUploaded={(uploadedFiles) => {
                      const fileIds = uploadedFiles.map((file) => ({ id: file.id }));
                      localStorage.setItem('uploadedFileIds', JSON.stringify(fileIds)); // Save uploaded file IDs
                    }}
                  />
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
