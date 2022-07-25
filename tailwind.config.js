module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#282c35',
      // primary: '#111827',
      cardgray: '#41424bf7',
      // cardgray: '#1F2937',
      fontgray: '#9ca3af',
      'hover-cardgray': '#545769f7',
      // 'hover-cardgray': '#374151',
      white: '#ffffff',
      'primary-text': '#6e96ee',
      // 'primary-text': '#818CF8',
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
