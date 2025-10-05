/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './site/**/*.tmpl',
        './static/**/*.js',
    ],
    theme: {
        extend: {
            fontFamily: {
                'mono': ['"Geist Mono"', 'monospace'],
            },
        },
    },
    plugins: [],
}