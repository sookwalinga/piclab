module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    gradientColorStops: (theme) => ({
      ...theme('colors'),
      primary: '#FF75B7',
      secondary: '#E14551',
      danger: '#e3342f',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
