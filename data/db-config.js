// db-config
const knex = require('knex');
const env = 'development';
const configs = require('../knexfile'); 

const db = knex(configs[env]);

module.exports = db;