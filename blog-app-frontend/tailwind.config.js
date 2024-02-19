/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        brand: ['YesevaOne', 'serif'],
        title: ['Libre Baskerville', 'serif']
      },
      keyframes: {
        fadeOut: {
          '0%': { opacity: '.9' },
          '100%': { opacity: '0' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '.9' }
        }
      },
      animation: {
        fadeOut: 'fadeOut 0.3s ease-in forwards',
        fadeIn: 'fadeIn 0.3s ease-in forwards'
      }
    }
  },
  plugins: []
};
