/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        nexora: {
          bg:        '#0D0E1A',
          surface:   '#13141F',
          elevated:  '#1A1B2E',
          border:    '#252637',
          accent:    '#6C63FF',
          accentHov: '#8B85FF',
          green:     '#22D3A5',
          amber:     '#F59E0B',
          text:      '#E8E9F3',
          muted:     '#8B8FA8',
          subtle:    '#4A4D6A',
        },
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        dm:   ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
