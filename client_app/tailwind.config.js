module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
          ec_primary1: "#1a2634",
          ec_primary2: "#203e5f",
          ec_secondary1: "#eec550",
          ec_secondary2: "#f9e3a3",
      },
      fontFamily: {
        'main': ['"Poppins"', 'sans-serif']
      }
  },
  
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}
