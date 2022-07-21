/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js, jsx, ts, txs}"],
    theme: {
        // colors: {
        //     violet: "#9d159d",
        // },
        fontSize: {
            sm: "14px",
            md: "18px",
            lg: "24px",
            xl: "35px",
        },

        screens: {
            sm: "450px",
            md: "650px",
            lg: "750px",
            xl: "850px",
        },
        extend: {},
    },
    plugins: [],
};
