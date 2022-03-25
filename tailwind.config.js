module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        primary : "'Red Hat Display', sans-serif"
      },
      colors : {
        primary : {
          100 : 'hsl(225, 100%, 98%)',
          200 : 'hsl(223, 47%, 23%)',
          300 : 'hsl(245, 75%, 52%)',
          400 : 'hsl(225, 100%, 94%)',
          500 : 'hsl(224, 23%, 55%)'
        }
      }
    },
  },
  plugins: [

  ],
}
