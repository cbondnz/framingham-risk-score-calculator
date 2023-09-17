/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        bg: "url('/background.svg')",
        bgHalf: "url('/background-half-opacity.svg')",
      },
      textColor: {
        red: "#ff0000",
      },
      colors: {
        primary: "#023047",
        secondary: "#00afef",
        bgAccentDark: "#fce2ec",
        bgAccentLight: "#ffeff5",
        bgAccentHover: "#9c3059",
        secondaryHover: "#007aa7",
        link: "#0000ff",
        accent: "#ef367e",
        error: "#ff0000",
        lightGray: "rgb(148, 148, 148)",
      },
      borderRadius: {
        full: "60px",
        half: "30px",
      },
      fontSize: {
        "4.5xl": "44px",
      },
      backgroundSize: {
        half: "50%",
      },
      gridTemplateColumns: {
        radio: "1em auto",
        text: "4em auto",
      },
      width: {
        75: "300px",
        50: "200px",
      },
      height: {
        75: "300px",
        50: "200px",
      },
      boxShadow: {
        box: "10px 10px 5px rgba(78, 78, 78, 0.5)",
      },
      padding: {
        62: "254px",
      },
    },
  },
  plugins: [],
};
