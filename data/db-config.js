// db-config



const knex = require('knex');

const config = require('../knexfile.js')

const db = knex(confug.development);

module.exports = db;
