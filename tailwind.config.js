/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        screens: {
            'xs': {'max': '639px'},

            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        colors: {
            transparent: "transparent",
            black: "#000",
            gray100: "#161616",
            gray90: "#262626",
            gray80: "#393939",
            gray70: "#525252",
            gray60: "#6F6F6F",
            gray50: "#8D8D8D",
            gray40: "#A8A8A8",
            gray30: "#C6C6C6",
            gray20: "#E0E0E0",
            gray10: "#F4F4F4",
            white: "#FFFFFF",
            blue100: "#001141",
            blue90: "#001D6C",
            blue80: "#002D9C",
            blue70: "#0043CE",
            blue60: "#0F62FE",
            blue50: "#4589FF",
            blue40: "#78A9FF",
            blue30: "#A6C8FF",
            blue20: "#D0E2FF",
            blue10: "#EDF5FF",
            primary: "#0F62FE"
        },
        extend: {
            gridTemplateRows: {
                '8': 'repeat(8, minmax(0, 1fr))',
            },
        },
    },
    plugins: []
};