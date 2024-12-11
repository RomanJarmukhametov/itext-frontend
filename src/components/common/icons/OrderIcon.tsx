/* eslint-disable @typescript-eslint/no-explicit-any */

export default function OrderIcon(props: any) {
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
          d="M1.66669 4.33331H2.66669H29.3334H30.3334V5.33331V9.33331V18.6666V19.6666H28.3334V18.6666V11.254L16.5735 19.4859L16 19.8873L15.4266 19.4859L3.66669 11.254V25.6666H16H17V27.6666H16H2.66669H1.66669V26.6666V9.33331V5.33331V4.33331ZM3.66669 8.81266L16 17.446L28.3334 8.81266V6.33331H3.66669V8.81266ZM30.7476 24L30.0405 24.7071L24.7071 30.0404L24 30.7475L23.2929 30.0404L20.6262 27.3738L19.9191 26.6666L21.3334 25.2524L22.0405 25.9595L24 27.9191L28.6262 23.2929L29.3334 22.5858L30.7476 24Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
