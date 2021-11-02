module.exports = {
  // Use only the tailwind styles used in the application.
  purge: { enabled: true, content: ['.pages/**/*.js'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
