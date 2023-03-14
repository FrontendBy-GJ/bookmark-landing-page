/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(231, 69%, 60%)',
        secondary: 'hsl(0, 94%, 66%)',
        neutral: 'hsl(229, 8%, 60%)',
        'base-200': 'hsl(229, 31%, 21%)',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: 'hsl(231, 69%, 60%)',
          secondary: 'hsl(0, 94%, 66%)',
          neutral: 'hsl(229, 8%, 60%)',
          'base-200': 'hsl(229, 31%, 21%)',

          '--btn-text-case': 'capitalize',
        },
      },
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
