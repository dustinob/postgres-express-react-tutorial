const dotenv = require('dotenv')

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB,
    host: process.env.DB_HOST,
    port: '5432',
    dialect: 'postgres'
  },
  test: {
    username: 'waiyaki',
    password: null,
    database: 'todos-test',
    host: '127.0.0.1',
    port: '5432',
    dialect: 'postgres'
  }
}
