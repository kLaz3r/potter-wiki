/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            spacing: {
                69: "5rem",
            },
        },
        colors: {
            light: "#fffcf2",
            medium: "#ccc5b9",
            dark: "#403d39",
            darkest: "#252422",
            accent: "#eb5e28",
        },
    },
    plugins: [],
};
