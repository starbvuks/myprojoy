module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      moresugar: ["MoreSugar", "display"],
      josefin: ["Josefin Sans", "sans-serif"],
    },

    extend: {
      backgroundImage: (theme) => ({
        landing: "url('/img/landingBlue.svg')",
        landingOrange: "url('/img/landingOrange.svg')",
        orangeBlob: "url('/img/orangeBlob.svg')",
      }),
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#f2f2f2",
        orange: "#FFF1D6",
        brightOrange: "#F37021",
        lightBlue: "#99C8C1",
      }),
      textColor: (theme) => ({
        primary: "#f2f2f2",
        darkBlue: "#257E90",
        brightOrange: "#F37021",
      }),
      divideColor: (theme) => ({
        darkBlue: "#257E90",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
