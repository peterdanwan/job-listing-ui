/** @type {import('tailwindcss').Config} */
export default {
  //* Looks for tailwind classes in ANY of those files
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // Manually added content within extend
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      // Adding a grid class for the details page
      // 70/30 is the class
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
    },
  },
  plugins: [],
};
