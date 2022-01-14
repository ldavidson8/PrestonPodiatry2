module.exports = {
  content: ['./src/**/*.{js,md,njk,svg}'],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-debug-screens'),
  ],
  theme: {
    extend: {
      colors: {
        primary: '',
        secondary: '',
      },
    },
  },
}
