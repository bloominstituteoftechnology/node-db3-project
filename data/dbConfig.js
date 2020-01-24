const knex = require('knex');

const environment = process.env.DB_ENV || 'development';

const knexConfig = require('../knexfile.js');[environment];

module.exports = knex(knexConfig.development);