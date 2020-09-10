const knex = require('knex')

const knexfile = require('../knexfile')

const knexConfig = knexfile.development

module.exports = knex(knexConfig)

