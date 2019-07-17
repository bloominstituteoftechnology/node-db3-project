const db = require('../dbConfig')

module.exports = {
    find
}

function find(){
    return db('schemes')
}