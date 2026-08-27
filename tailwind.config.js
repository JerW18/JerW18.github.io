/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // System font stacks — period-accurate, and no webfont request.
      fontFamily: {
        sans: ['Verdana', 'Tahoma', 'Geneva', 'DejaVu Sans', 'sans-serif'],
        mono: ['"Courier New"', 'Courier', 'monospace'],
      },
      // Early-2000s application chrome: silver panels, white paper, navy title bars.
      colors: {
        chrome: {
          DEFAULT: '#D4D0C8',   // panel face
          light:   '#FFFFFF',   // top-left bevel highlight
          mid:     '#ECE9D8',   // recessed / alternate face
          dark:    '#808080',   // bottom-right bevel shade
          darker:  '#404040',   // outer border
        },
        title: {
          from: '#0A246A',      // title bar gradient start
          to:   '#3A6EA5',      // title bar gradient end
        },
        paper:  '#FFFFFF',      // content background
        accent: '#003399',      // headings, markers, labels
        ink: {
          DEFAULT: '#1a1a1a',
          muted:   '#555555',
        },
        link: {
          DEFAULT: '#0000CC',
          visited: '#551A8B',
        },
      },
      // Classic 2px bevels, built from inset shadows so they work on any element.
      boxShadow: {
        bevel:
          'inset -1px -1px 0 #404040, inset 1px 1px 0 #FFFFFF, ' +
          'inset -2px -2px 0 #808080, inset 2px 2px 0 #DFDFDF',
        'bevel-in':
          'inset 1px 1px 0 #404040, inset -1px -1px 0 #FFFFFF, ' +
          'inset 2px 2px 0 #808080, inset -2px -2px 0 #DFDFDF',
        panel: '2px 2px 0 rgba(0, 0, 0, 0.25)',
        // Raised bevel + hard drop shadow, combined (shadow utilities don't stack).
        window:
          'inset -1px -1px 0 #404040, inset 1px 1px 0 #FFFFFF, ' +
          'inset -2px -2px 0 #808080, inset 2px 2px 0 #DFDFDF, ' +
          '2px 2px 0 rgba(0, 0, 0, 0.25)',
      },
      // Nothing in this era had rounded corners.
      borderRadius: {
        none: '0',
        sm: '0',
        DEFAULT: '0',
        md: '0',
        lg: '0',
        xl: '0',
        '2xl': '0',
        '3xl': '0',
        full: '0',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
}
