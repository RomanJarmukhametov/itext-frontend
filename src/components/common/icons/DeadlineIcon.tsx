/* eslint-disable @typescript-eslint/no-explicit-any */
export default function DeadlineIcon(props: any) {
  return (
    <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-blue-500 rounded-lg">
      <svg
        {...props}
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.27744 1.72268C6.79879 2.24403 6.79879 3.0893 6.27744 3.61065L3.61077 6.27732C3.08942 6.79867 2.24415 6.79867 1.7228 6.27732C1.20145 5.75597 1.20145 4.91069 1.7228 4.38934L4.38947 1.72268C4.91082 1.20133 5.75609 1.20133 6.27744 1.72268ZM25.7228 1.72268C26.2442 1.20133 27.0894 1.20133 27.6108 1.72268L30.2774 4.38934C30.7988 4.91069 30.7988 5.75597 30.2774 6.27732C29.7561 6.79867 28.9108 6.79867 28.3895 6.27732L25.7228 3.61065C25.2014 3.0893 25.2014 2.24403 25.7228 1.72268ZM16.0001 5.335C10.11 5.335 5.33512 10.1099 5.33512 16C5.33512 21.8901 10.11 26.665 16.0001 26.665C21.8902 26.665 26.6651 21.8901 26.6651 16C26.6651 10.1099 21.8902 5.335 16.0001 5.335ZM2.66512 16C2.66512 8.63528 8.6354 2.665 16.0001 2.665C23.3648 2.665 29.3351 8.63528 29.3351 16C29.3351 23.3647 23.3648 29.335 16.0001 29.335C8.6354 29.335 2.66512 23.3647 2.66512 16ZM16.0001 7.99833C16.7374 7.99833 17.3351 8.59603 17.3351 9.33333V17.3333C17.3351 18.0706 16.7374 18.6683 16.0001 18.6683C15.2628 18.6683 14.6651 18.0706 14.6651 17.3333V9.33333C14.6651 8.59603 15.2628 7.99833 16.0001 7.99833ZM14.6651 22.6667C14.6651 21.9294 15.2628 21.3317 16.0001 21.3317H16.0135C16.7508 21.3317 17.3485 21.9294 17.3485 22.6667C17.3485 23.404 16.7508 24.0017 16.0135 24.0017H16.0001C15.2628 24.0017 14.6651 23.404 14.6651 22.6667Z"
          fill="white"
        />
      </svg>
    </div>
  );
}