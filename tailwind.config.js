/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      stix: ['STIX Two Text', 'serif'],
      kalam: ['Kalam', 'cursive'],
      ptSerif: ['PT Serif', 'serif'],
      whisper: ['Whisper', 'cursive'],
    },
    extend: {
      colors: {
        olive: '#686736',
        tangerine: '#be5a09',
        brown: ' #7f3c06',
        offWhite: '#d9d4c9',
        gray: '#b8b7a0',
      },
    },
    screens: {
      mob1: '360px',
      mob2: '460px',
      mob3: '560px',
      sm: '640px',
      md: '760px',
      md1: '860px',
      md2: '960px',
      lg: '1024px',
      xl: '1280px',
      xl2: '1536px',
    },
  },
  plugins: [],
};
 