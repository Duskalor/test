/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        fondo: {
          100: '#cfcfcf',
          200: '#a0a0a0',
          300: '#707070',
          400: '#414141',
          500: '#111111',
          600: '#0e0e0e',
          700: '#0a0a0a',
          800: '#070707',
          900: '#030303',
        },
        lista: {
          100: '#cfd0d1',
          200: '#a0a1a3',
          300: '#707374',
          400: '#414446',
          500: '#111518',
          600: '#0e1113',
          700: '#0a0d0e',
          800: '#07080a',
          900: '#030405',
        },
      },
    },
  },
  plugins: [],
};
