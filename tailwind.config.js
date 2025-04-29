/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'nav': '0 -1px 2px 0 rgba(0, 0, 0, 0.05)', 
      },
      colors: {
        primary: {
          DEFAULT: '#3B82F6',
          light: '#93C5FD',
          dark: '#1D4ED8',
        },
        text: {
          DEFAULT: '#000000',
          light: '#9CA3AF', 
          grey: '#6B7280',          
          dark: '#1F2937', 
        },
        background: {
          DEFAULT: '#FFFFFF',
          light: '#F3F4F6',
        },
      },          
    },
  },
  plugins: [],
}
