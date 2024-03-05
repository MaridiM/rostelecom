import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontFamily: {
            'regular': ['Rostelecom Basis Regular', 'sans-serif'],
            'medium': ['Rostelecom Basis Medium', 'sans-serif'],
            'bold': ['Rostelecom Basis Bold', 'sans-serif'],
        },
        container: {
            center: true,
            padding: "0px 15px",
        },
        screens: {
            xs: "480px",
            sm: "640px",
            md: "768px",
            lg: "960px",
            xl: "1535px",
        },
        keyframes: {
            "accordion-down": {
                from: { height: "0" },
                to: { height: "var(--radix-accordion-content-height)" },
            },
            "accordion-up": {
                from: { height: "var(--radix-accordion-content-height)" },
                to: { height: "0" },
            },
        },
        animation: {
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
        },
        extend: {
            colors: {
                ligth: {
                    DEFAULT: "#E8E9EA",
                    hover: "#9466FF",
                },
                background: "#1D2533",
            },
            backgroundImage: {
                "favorites-icon": "url('/img/favorites.svg)" 
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
