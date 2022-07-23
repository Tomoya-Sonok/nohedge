module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      // primary: '#111827',
      primary: '#282c35',
      cardgray: '#1F2937',
      fontgray: '#9ca3af',
      'hover-cardgray': '#374151',
      white: '#ffffff',
      'primary-text': '#818CF8',
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
