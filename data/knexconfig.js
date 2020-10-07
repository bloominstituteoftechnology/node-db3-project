// read configuration dynamically <-- `development` inside knexfile.js 
const knex = require("knex")

const knexfile = require('../knexfile')

//on heroku NODE_ENV will be 'production'
const enviroment = process.env.NODE_ENV ||"development";

const config = knexfile[enviroment];

module.exports = knex(config);