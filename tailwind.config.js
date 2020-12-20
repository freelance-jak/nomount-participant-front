module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "accent-1": "#333",
        primary: "#04123D",
      },
    },
  },
  variants: { extend: {} },
  plugins: [],
};
