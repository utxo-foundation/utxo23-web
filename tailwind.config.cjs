module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        custom: {
          blue: '#4D96FF',
          green: '#6BCB77',
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
        'utxo-gradient': 'linear-gradient(130deg,#FF634D,#00A1FE)'
      }
    }
  },
  plugins: [],
}
