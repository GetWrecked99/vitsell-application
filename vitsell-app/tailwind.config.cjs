/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '415px',

      md: '564px',

      lg: '767px',

      xl: '1043px',

      '2xl': '1440px',
    },
    extend: {
      colors: {
        glassyEffect: 'rgba(255,255,255,0.08)',
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss')({ prefix: 'ui' })],
}
