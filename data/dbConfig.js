const knex = require("knex")
const knexfile = require("../knexfile")

const dbconfig = knex(knexfile.development)

module.exports = dbconfig