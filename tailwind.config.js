/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.vue"],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/aspect-ratio')
    ],
};

