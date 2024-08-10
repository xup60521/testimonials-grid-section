/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                c_Moderate_violet: "hsl(263, 55%, 52%)",
                c_Very_dark_grayish_blue: "hsl(217, 19%, 35%)",
                c_Very_dark_blackish_blue: "hsl(219, 29%, 14%)",
                c_Light_gray: "hsl(0, 0%, 81%)",
                c_Light_grayish_blue: "hsl(210, 46%, 95%)",
            },
            fontFamily: {
                barlow: ["Barlow Semi Condensed", "sans-serif"],
            }
        },
    },
    plugins: [],
}

