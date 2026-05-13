/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a192f',
        surface: '#112240',
        border: '#233554',
        accent: '#64ffda',
        'accent-hover': '#4dd8b6',
        text: '#ccd6f6',
        'text-light': '#e6f1ff',
        muted: '#8892b0',
        'slate-custom': '#a8b2d1',
      },
      fontFamily: {
        sans: ['Inter', 'Calibre', 'San Francisco', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"SF Mono"', '"Fira Code"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightish: '-0.02em',
      },
    },
  },
  plugins: [],
};
