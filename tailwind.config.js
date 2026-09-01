/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './lib/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#08131d',
        paper: '#eaf1f6',
        fog: '#a8b3bf',
        signal: '#f7a93b',
        signal2: '#6ee7d3',
        panel: '#0f1b2a',
        line: '#1e2a38',
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
