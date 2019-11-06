const knex = require("knex");

const config = require("../knexfile")[process.env.DBCONFIG || "development"];

module.exports = knex(config);