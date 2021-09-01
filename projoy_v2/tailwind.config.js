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
      }),
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#f2f2f2",
        orange: "#FFF1D6",
        mustard: "#EEB65E",
        darkOrange: "#EE964B",
      }),
      textColor: (theme) => ({
        sunset: "#F5F3BB",
        brightOrange: "#F37021",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
