/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ivory': '#FAF9F6',
        'warm-gold': '#F8D984',
        'gold-dark': '#B8972F',
        'deep-blue': '#264053',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        'section': '80px',
        'desktop-section': '120px',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-12px) rotate(2deg)' },
          '66%': { transform: 'translateY(-6px) rotate(-1deg)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(248, 217, 132, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(248, 217, 132, 0.6)' },
        },
        'gold-line': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        'text-glow': {
          '0%, 100%': { textShadow: '0 0 10px rgba(248, 217, 132, 0.0)' },
          '50%': { textShadow: '0 0 20px rgba(248, 217, 132, 0.4)' },
        },
      },
      animation: {
        shimmer: 'shimmer 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'gold-line': 'gold-line 1.5s ease-out forwards',
        'text-glow': 'text-glow 3s ease-in-out infinite',
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
