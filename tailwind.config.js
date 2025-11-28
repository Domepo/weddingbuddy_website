/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"DM Sans"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f8f5ff',
          100: '#efe8ff',
          200: '#d7c8ff',
          300: '#b9a0ff',
          400: '#9472ff',
          500: '#7f56d9',
          600: '#6b3fc2',
          700: '#592fa4',
          800: '#482785',
          900: '#391d68',
        },
      },
    },
  },
  plugins: [],
};
