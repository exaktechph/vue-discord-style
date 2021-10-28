module.exports = {
  purge: ['./dist/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#27498F",
        secondary: "#CBD6E6",
        hoverColor: "#235D9C"
      },
      fontFamily: {
        'heading': ['Montserrat'],
        'subheading': ['"Bebas Neue"'],
        'body': ['Montserrat'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  variants: {
  extend: {},
  },
  plugins: [],
};