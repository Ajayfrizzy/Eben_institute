// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4fce9',
          100: '#e5f8c9',
          200: '#cdf19a',
          300: '#b1e76a',
          400: '#94de61',  // Company color RGB(148, 222, 97)
          500: '#7bc94a',
          600: '#5fa336',
          700: '#487d2c',
          800: '#3b6327',
          900: '#335423',
        },
        eben: {
          50: '#f4fce9',
          100: '#e5f8c9',
          200: '#cdf19a',
          300: '#b1e76a',
          400: '#94de61',  // Main company color
          500: '#7bc94a',
          600: '#5fa336',
          700: '#487d2c',
          800: '#3b6327',
          900: '#335423',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}