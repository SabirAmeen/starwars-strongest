/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      'sm': '360px',
      'lg': '1024px',
      fontSize: {
        sm: ['16px', '28px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },
      fontFamily: {
        main: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
};
