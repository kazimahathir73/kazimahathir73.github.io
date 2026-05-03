/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                white: '#F6FDDC',
                black: '#000000',
                comic: {
                    yellow: '#FFD700',
                    pink: '#ff0066',
                    gray: '#d1d5db'
                }
            },
            fontFamily: {
                bangers: ['Bangers', 'cursive'],
                marker: ['Permanent Marker', 'cursive'],
            }
        },
    },
    plugins: [],
};
