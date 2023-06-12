/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js, jsx, ts, txs}"],
    theme: {
        fontSize: {
            sm: "14px",
            md: "18px",
            lg: "24px",
            xl: "35px",
            xxl: "45px",
            xxxl: "65px",
        },

        screens: {
            sm: "450px",
            md: "650px",
            lg: "750px",
            xl: "850px",
        },
        colors: {
            light: "#bbb",
            dark: "#111",
            lightDark: "#444",
            primary: "#0284c7",
            white: "#fff",
            linkedin: "#0077B5",
            darkPrimary: "#075985",
            whatsapp: "#128C7E",
        },
        extend: {},
    },
    plugins: [],
};
