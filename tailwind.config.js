/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './lib/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#08131d',
          light: '#f5f5f5',
        },
        paper: {
          DEFAULT: '#eaf1f6',
          light: '#1a1a1a',
        },
        fog: {
          DEFAULT: '#a8b3bf',
          light: '#666666',
        },
        signal: '#f7a93b',
        signal2: '#6ee7d3',
        panel: {
          DEFAULT: '#0f1b2a',
          light: '#ffffff',
        },
        line: {
          DEFAULT: '#1e2a38',
          light: '#e0e0e0',
        },
      },
      maxWidth: {
        content: '1180px',
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0,0,0,0.18)',
      },
    },
  },
  plugins: [],
};
