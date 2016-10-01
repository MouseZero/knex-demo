const cfg = require('./knex-cfg.js').pg
const knex = require('knex')(cfg)
const screen = require('./screen.js')

knex.select('title', 'rating').from('book')
.then((rows) => {
  screen.write(rows, 'json')
})
.catch((err) => {
  screen.write(err)
})
.finally(() => {
  knex.destroy()
})
