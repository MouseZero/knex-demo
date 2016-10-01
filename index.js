'use strict'
const cfg = require('./dbConfig.json')
const knex = require('knex')(cfg)

knex.select('title', 'rating').from('book').asCallback((err, rows) => {
  if (err) {
    console.log(err)
  } else {
    console.log(rows)
  }
  knex.destroy()
  console.log('Done')
})
