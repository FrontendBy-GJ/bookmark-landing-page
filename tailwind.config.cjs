/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(231, 69%, 60%)',
        accent: 'hsl(0, 94%, 66%)',
        neutral: 'hsl(229, 8%, 60%)',
        dark: 'hsl(229, 31%, 21%)',
      },
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
