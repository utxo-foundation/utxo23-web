
export const EventTypes = {
  panel: {
    text: 'Panelová debata',
    color: 'bg-orange-400',
    colorLight: 'bg-orange-400/20',
    colorDark: 'bg-orange-400/40'
  },
  talk: {
    text: 'Přednáška',
    color: 'bg-custom-green',
    colorLight: 'bg-custom-green/20',
    colorDark: 'bg-custom-green/40'
  },
  workshop: {
    text: 'Workshop',
    color: 'bg-custom-blue',
    colorLight: 'bg-custom-blue/20',
    colorDark: 'bg-custom-blue/40'
  },
  campfire: {
    text: 'Campfire',
    color: 'bg-purple-400',
    colorLight: 'bg-purple-400/20',
    colorDark: 'bg-purple-400/40'
  },
  lightning: {
    text: 'Blesková přednáška',
    color: 'bg-pink-400',
    colorLight: 'bg-pink-400/20',
    colorDark: 'bg-pink-400/40'
  },
  'lightning-series': {
    text: 'Série bleskových přednášek',
    color: 'bg-yellow-400',
    colorLight: 'bg-yellow-400/20',
    colorDark: 'bg-yellow-400/40'
  },
  other: {
    text: 'Ostatní',
    color: 'bg-rose-400',
    colorLight: 'bg-rose-400/20',
    colorDark: 'bg-rose-400/40'
  }
}


export const navBarLinks=[
  {
    text: "Domů",
    url: "/",
    newWindow: false,
    hideOnHomepage: true
  },
  {
    text: "Program",
    url: "https://cfp.utxo.cz/23/schedule/",
    newWindow: true,
  },
  {
    text: "Stream",
    url: "https://utxo.tv/",
    newWindow: true
  },
  {
    text: "KryptoVláďa Studio",
    url: "https://www.youtube.com/playlist?list=PLkRrLw53Og1aaMEF4ia54JdLKu6fumZwX",
    newWindow: true
  },
  {
    text: "Fotky 2023",
    url: "/fotky",
    newWindow: false
  },
  {
    text: "#PBW23",
    url: "https://prgblockweek.com/",
    newWindow: true
  }
]