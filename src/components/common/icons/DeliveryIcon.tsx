/* eslint-disable @typescript-eslint/no-explicit-any */

export default function DeliveryIcon(props: any) {
  return (
    <div className="inline-flex h-16 w-16 mb-7 mx-auto items-center justify-center text-white bg-blue-500 rounded-lg">
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
          d="M10.3333 1.66663V2.66663V4.33329H21.6667V2.66663V1.66663H23.6667V2.66663V4.33329H28H29V5.33329V9.66663V11.6666V29.3333V30.3333H28H4H3V29.3333V11.6666V9.66663V5.33329V4.33329H4H8.33333V2.66663V1.66663H10.3333ZM8.33333 6.33329H5V9.66663H27V6.33329H23.6667H21.6667H10.3333H8.33333ZM27 11.6666H5V28.3333H27V11.6666ZM8.33333 16.3333H9.33333H14.6667H15.6667V17.3333V22.6666V23.6666H14.6667H9.33333H8.33333V22.6666V17.3333V16.3333ZM10.3333 18.3333V21.6666H13.6667V18.3333H10.3333Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
