module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif']
      },
      backgroundImage: {
        'header': "url(../img/header.png)",
        'body': 'linear-gradient(90deg, #FFF 31px, transparent 1px), linear-gradient(180deg, #FFF 31px, #888 1px)'
      },
      minWidth: {
        'lesson-3': 'calc((100% - (24px * 3)) / 3)',
        'lesson-2': 'calc((100% - (24px * 2)) / 2)',
        'lesson-1': '100%'
      }
    },
  },
  plugins: [],
}
