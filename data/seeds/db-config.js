const knex = require("knex")

const config = require('../knexfilee')

module.exports = knex(config.development)
