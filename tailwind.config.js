/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1124px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '3600px',
    },
    extend: {
      container: {
        center: true,
        padding: '0.1px',
      },
      spacing: {
        'custom-checkbox': '1rem',
      },

    },
  },
  plugins: [],
};
