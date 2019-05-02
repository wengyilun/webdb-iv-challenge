// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/cooking.sqlite3'
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    // sQL
    pool:{
      afterCreate: (connection, done) => {
        connection.run('PRAGMA foreign_keys = ON', done)
      }
    }
  },

};
