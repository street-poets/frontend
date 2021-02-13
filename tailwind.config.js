module.exports = {
  purge: [
    './pages/**/*.{tsx}',
    './components/**/*.{tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: theme => ({
        "5vh": "calc(100vh / 20)",
        "10vh": "calc(100vh / 10)",
        "30vh": "calc(100vh / 10 * 3)",
        "50vh": "calc(100vh / 10 * 5)",
        "60vh": "calc(100vh / 10 * 6)",
        "70vh": "calc(100vh / 10 * 7)",
        "90vh": "calc(100vh / 10 * 9)"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
