const databaseName = require('../credentials/database.json').database
const databaseUser = require('../credentials/database.json').user
const databasePassword = require('../credentials/database.json').password

module.exports = {
  dialect: 'postgres',
  host: '127.0.0.1',
  username: databaseUser,
  password: databasePassword,
  database: databaseName,
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
