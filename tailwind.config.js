/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './lib/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#08131d',
          light: '#050505',
        },
        paper: {
          DEFAULT: '#eaf1f6',
          light: '#050505',
        },
        fog: {
          DEFAULT: '#a8b3bf',
          light: '#65676b',
        },
        signal: '#f7a93b',
        signal2: '#6ee7d3',
        panel: {
          DEFAULT: '#0f1b2a',
          light: '#ffffff',
        },
        line: {
          DEFAULT: '#1e2a38',
          light: '#ced0d4',
        },
        surface: {
          light: '#f0f2f5',
        },
        'paper-light': '#050505',
        'fog-light': '#65676b',
      },
      maxWidth: {
        content: '1180px',
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0,0,0,0.18)',
        'card-light': '0 1px 2px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
