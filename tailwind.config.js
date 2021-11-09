module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // animation: {
      //   marquee: 'marquee 25s linear infinite',
      // },
      // keyframes: {
      //   marquee: {
      //     '0%': { transform: 'translateX(0%)' },
      //     '100%': { transform: 'translateX(-100%)' },
      //   },
      // },
    },
    gradientColorStops: (theme) => ({
      ...theme('colors'),
      primary: '#FF75B7',
      secondary: '#E14551',
      danger: '#e3342f',
    }),
  },
  variants: {},
  plugins: [],
};
