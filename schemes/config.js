const { development: devConfig }= require('../knexfile')
const knex = require('knex');

module.exports = knex(devConfig)