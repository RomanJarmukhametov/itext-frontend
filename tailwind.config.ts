/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        coolGray: {
          50: '#F7F8F9',
          100: '#EEF0F3',
          200: '#D5DAE1',
          300: '#BBC3CF',
          400: '#8896AB',
          500: '#556987',
          600: '#4D5F7A',
          700: '#404F65',
          800: '#333F51',
          900: '#2A3342',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
