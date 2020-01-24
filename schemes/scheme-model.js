const db = require('../data/db-config.js')

db.select('schemes')

db('schemes').where({id: 0})