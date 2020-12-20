module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "accent-1": "#333",
        primary: "#04123D",
        active: "#24c9af",
        negative: "#707070",
      },
    },
  },
  variants: { extend: {} },
  plugins: [],
};
