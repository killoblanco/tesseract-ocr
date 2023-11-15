import daisyui, { type CustomTheme } from 'daisyui'
import typography from '@tailwindcss/typography'

const themes = {
  light: {
    primary: '#416917',
    'primary-content': '#ffffff',
    secondary: '#57624a',
    'secondary-content': '#ffffff',
    accent: '#386664',
    'accent-content': '#ffffff',
    neutral: '#fdfcf5',
    'neutral-content': '#1b1c18',
    'base-100': '#eff2e3',
    'base-200': '#e0e4d5',
    'base-300': '#c4c8ba',
    'base-content': '#191d14',
    info: '#0e5cb7',
    'info-content': '#ffffff',
    success: '#4e6700',
    'success-content': '#ffffff',
    warning: '#7a5900',
    'warning-content': '#ffffff',
    error: '#ba1a1a',
    'error-content': '#ffffff',
  },
  dark: {
    primary: '#a5d576',
    'primary-content': '#1c3700',
    secondary: '#bfcbad',
    'secondary-content': '#29331f',
    accent: '#a0cfcc',
    'accent-content': '#003735',
    neutral: '#1b1c18',
    'neutral-content': '#e3e3dc',
    'base-100': '#191d14',
    'base-200': '#2e3228',
    'base-300': '#393d33',
    'base-content': '#fafeef',
    info: '#abc7ff',
    'info-content': '#002f66',
    success: '#add543',
    'success-content': '#273500',
    warning: '#fabd24',
    'warning-content': '#402d00',
    error: '#ffb4ab',
    'error-content': '#690005',
  },
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Jost Variable']
      }
    },
  },
  plugins: [
    typography({ className: 'typo' }),
    daisyui,
  ],
  daisyui: {
    themes: [themes],
    lightTheme: "light",
    darkTheme: "dark",
  }
}

