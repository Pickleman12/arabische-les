/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f6',
          100: '#d8efe6',
          200: '#b3e0d1',
          300: '#83c7b6',
          400: '#54aa97',
          500: '#358b7b',
          600: '#2a7164',
          700: '#245b52',
          800: '#214a44',
          900: '#1e3d39',
          950: '#0f2522',
        },
        accent: {
          50: '#fdf8ed',
          100: '#f9eccc',
          200: '#f3d792',
          300: '#ecbc54',
          400: '#e7a32d',
          500: '#d98817',
          600: '#bc6711',
          700: '#9c4a12',
          800: '#813b15',
          900: '#6c3215',
          950: '#3e1809',
        },
        cream: '#faf7f2',
      },
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};