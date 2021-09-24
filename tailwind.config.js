module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    scrollbar: ['rounded'],
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
