const defaultTheme = require('tailwindcss/defaultTheme')

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
        primary: '#46a758',
        secondary: '',
      },
      minHeight: {
        '25%': '25vh',
        '50%': '50vh',
        '75%': '75vh',
      },
      maxHeight: {
        '25%': '25vh',
        '50%': '50vh',
        '75%': '75vh',
      },
      fontFamily: {
        sans: ["'Montserrat'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
