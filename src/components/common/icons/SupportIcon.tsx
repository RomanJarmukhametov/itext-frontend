/* eslint-disable @typescript-eslint/no-explicit-any */
export default function SupportIcon(props: any) {
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
          d="M1.33179 7.33329C1.33179 5.49142 2.82492 3.99829 4.66679 3.99829H27.3335C29.1753 3.99829 30.6685 5.49142 30.6685 7.33329V9.33329V18.2019C30.6685 18.9392 30.0708 19.5369 29.3335 19.5369C28.5962 19.5369 27.9985 18.9392 27.9985 18.2019V11.8974L17.9126 18.9575C16.7643 19.7613 15.2359 19.7613 14.0876 18.9575L4.00179 11.8974V24.6666C4.00179 25.0339 4.29952 25.3316 4.66679 25.3316H14.5057C15.243 25.3316 15.8407 25.9293 15.8407 26.6666C15.8407 27.4039 15.243 28.0016 14.5057 28.0016H4.66679C2.82492 28.0016 1.33179 26.5085 1.33179 24.6666V9.33329V7.33329ZM4.00179 8.63822L15.6188 16.7701C15.8477 16.9304 16.1525 16.9304 16.3815 16.7701L27.9985 8.63822V7.33329C27.9985 6.96602 27.7007 6.66829 27.3335 6.66829H4.66679C4.29952 6.66829 4.00179 6.96602 4.00179 7.33329V8.63822ZM24.0001 18.665C24.4404 18.665 24.8524 18.8821 25.1013 19.2453L26.7139 21.5981L29.4499 22.4047C29.8722 22.5292 30.206 22.8539 30.3421 23.2727C30.4781 23.6914 30.399 24.1503 30.1305 24.4993L28.391 26.76L28.4695 29.6113C28.4816 30.0515 28.2759 30.4693 27.9197 30.7281C27.5635 30.9869 27.1025 31.0534 26.6877 30.9059L24.0001 29.9502L21.3126 30.9059C20.8977 31.0534 20.4368 30.9869 20.0806 30.7281C19.7244 30.4693 19.5187 30.0515 19.5308 29.6113L19.6092 26.76L17.8698 24.4993C17.6013 24.1503 17.5221 23.6914 17.6582 23.2727C17.7942 22.8539 18.128 22.5292 18.5503 22.4047L21.2864 21.5981L22.8989 19.2453C23.1478 18.8821 23.5598 18.665 24.0001 18.665ZM24.0001 22.3615L23.2204 23.4991C23.0468 23.7524 22.7912 23.9381 22.4967 24.025L21.1737 24.4149L22.0148 25.5081C22.202 25.7514 22.2997 26.0519 22.2912 26.3588L22.2533 27.7376L23.5528 27.2755C23.8422 27.1726 24.1581 27.1726 24.4474 27.2755L25.7469 27.7376L25.709 26.3588C25.7006 26.0519 25.7982 25.7514 25.9854 25.5081L26.8265 24.4149L25.5036 24.025C25.209 23.9381 24.9534 23.7524 24.7798 23.4991L24.0001 22.3615Z"
          fill="white"
        />
      </svg>
    </div>
  );
}