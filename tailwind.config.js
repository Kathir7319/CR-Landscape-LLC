/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          950: '#05120a',
          900: '#091c10',
          850: '#0c2617',
          800: '#0f2e1e',
          700: '#15432a',
          600: '#1c5a38',
          500: '#267347',
          400: '#34945d',
          300: '#56b87d',
          200: '#90d6ab',
          100: '#cbedd8',
          50: '#f0f9f4',
        },
        turf: {
          dark: '#0f2b1b',
          DEFAULT: '#1b4d2e',
          light: '#2d7a4b',
          bright: '#3cb371',
          lime: '#65d900',
          neon: '#78f000',
        },
        gold: {
          DEFAULT: '#d4af37',
          light: '#f7ebbe',
          dark: '#aa820a',
        },
        sand: {
          50: '#faf8f5',
          100: '#f4efe8',
          200: '#e6ded3',
          300: '#d0c3b3',
          400: '#a89886',
          500: '#7f7160',
          600: '#5d5244',
          700: '#463d33',
          800: '#342d25',
          900: '#201b16',
          950: '#120f0c',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'glow': '0 0 35px -5px rgba(60, 179, 113, 0.4)',
        'glow-lime': '0 0 30px -4px rgba(101, 217, 0, 0.45)',
        'glow-gold': '0 0 30px -5px rgba(212, 175, 55, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
}
