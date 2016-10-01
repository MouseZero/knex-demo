const cfg = require('./knex-cfg.js').pg
const knex = require('knex')(cfg)
const screen = require('./screen.js')

knex.select('title', 'rating').from('book').asCallback((err, rows) => {
  if (err) {
    screen.write(err, 'text')
  } else {
    screen.write(rows, 'json')
  }
  knex.destroy()
  console.log('Done')
})
