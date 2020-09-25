const knex = require("knex");
const knexConfig = require("../knexfile");
const configuredKnex = knex(knexConfig.development);

module.exports = configuredKnex;