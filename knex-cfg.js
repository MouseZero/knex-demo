module.exports = {
  pg: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'dev',
      database: 'ps_data-access-in-nodejs-using-knex',
      password: '4bZzbN9KWWnuVd'
    },
    debug: true
  },

  sqlite: {
    client: 'sqlite3',
    connection: {
      filename: './book.sqlite'
    },
    debug: true
  }
}
