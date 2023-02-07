module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        custom: {
          green: '#06C87F',
          purple: '#A85ABF',
          darkpurple: '#5d3569',
          darkestpurple: '#1c131e',
          blue: '#4D96FF',
          yellow: '#FFD93D',
          red: '#FF6B6B',
        },
        blue: {
          web: '#393F67',
          'web-bg': '#191B2E',
          'web-light': '#DBE8F4',
          utxo: '#00A1FE'
        }
      },
      backgroundImage: {
        'utxo-gradient': 'linear-gradient(130deg,#06C87F,#A85ABF)'
      }
    }
  },
  plugins: [],
}
