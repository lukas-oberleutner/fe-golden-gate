/** @type {import('tailwindcss').Config} */

import {
  iconBasket,
  iconNotification,
  iconUser,
  iconArrowDown,
  iconSquares,
  iconMetal,
  iconCrypto,
  iconChart,
  iconHelp,
  iconPhone
} from "./src/theme/icons.ts";

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'rgba(0, 0, 0, 0)',
      white: {
        DEFAULT: 'var(--color-white)',
      },
      black: {
        DEFAULT: 'var(--color-black)',
      },
      neutral: {
        1: 'var(--color-neutral-1)',
        2: 'var(--color-neutral-2)',
        3: 'var(--color-neutral-3)',
        4: 'var(--color-neutral-4)',
        5: 'var(--color-neutral-5)',
        6: 'var(--color-neutral-6)',
      },
      txt: {
        DEFAULT: 'var(--color-txt)',
        unavailable: 'var(--color-txt-unavailable)',
      },
      primary: {
        DEFAULT: 'var(--color-primary)',
      },
      secondary: {
        DEFAULT: 'var(--color-secondary)',
      },
      tertiary: {
        DEFAULT: 'var(--color-tertiary)',
      },
      info: {
        DEFAULT: 'var(--color-info)',
      },
      success: {
        DEFAULT: 'var(--color-success)',
      },
      warning: {
        DEFAULT: 'var(--color-warning)',
      },
      error: {
        DEFAULT: 'var(--color-error)',
      },
    },
    extend: {
      fontSize: {
        '2xs': '0.5rem',
        'md':  ['0.9375rem', '1.375rem'], // 15px
        '1xl': ['1.375rem', '1.625rem'],
      },
      fontFamily: {
        raleway: ['var(--font-family)', 'sans-serif'],
      },
      borderWidth: {
        '3': '3px',
      },
      boxShadow: {
        'custom': '0 0 10px rgba(0, 0, 0, 0.25)',
      },
    },
  },
};
