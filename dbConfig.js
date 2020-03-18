const knex = require('knex');

const knexfile = require('./knexfile');

const db = knex(knexfile.developement);

module.exports = db;
