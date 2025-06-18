/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'purple-custom': '#6B46C1',
                'gray-dark': '#2D3748',
                'yellow-custom': '#F6E05E'
            }
        }
    },
    plugins: []
}
