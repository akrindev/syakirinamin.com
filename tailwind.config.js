module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,jsx,md,mdx,ts,tsx}",
    "./components/**/*.{js,jsx,md,mdx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "Roboto"],
        nunito: ["var(--font-nunito)", "Roboto"],
      },
    },
  },
  plugins: [],
};
