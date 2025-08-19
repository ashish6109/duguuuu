/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f1fcff',
          100: '#d8f6ff',
          200: '#b2ecff',
          300: '#7ae0ff',
          400: '#31cdf7',
          500: '#12a8d6',
          600: '#0c86b0',
          700: '#0c6b8d',
          800: '#0e5873',
          900: '#0e4a5f'
        }
      }
    }
  },
  plugins: [],
}
