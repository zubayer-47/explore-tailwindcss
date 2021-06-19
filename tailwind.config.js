module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-img": "url('./img/header.jpg')",
      }),
      container: {
        center: true,
      },
      height: {
        80: "270px",
      },
      letterSpacing: {
        widest: ".66rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
