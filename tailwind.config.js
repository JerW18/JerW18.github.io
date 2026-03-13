/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Custom font families — loaded via Google Fonts in index.html
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      // Custom color palette — dark theme inspired by GitHub's UI
      colors: {
        primary: '#059669',   // emerald-600 — the brand accent
        surface: {
          900: '#050709',     // near-black main background
          800: '#0d1117',     // section alternating background
          700: '#161b22',     // card background
          600: '#21262d',     // border / badge background
          500: '#30363d',     // lighter border
        },
      },
      // Glow shadow utility for hover effects
      boxShadow: {
        glow: '0 0 20px rgba(5, 150, 105, 0.15)',
        'glow-lg': '0 0 40px rgba(5, 150, 105, 0.2)',
      },
    },
  },
  plugins: [],
}
