/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                vscode: [
                    "Consolas",
                    "Monaco",
                    "Menlo",
                    "Courier New",
                    "monospace",
                ],
            },
        },
    },
    plugins: [],
};
