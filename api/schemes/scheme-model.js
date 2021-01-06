// scheme-model
const db = require('../../data/db-config')

module.exports = {
    find,
    findById
};

function find() {
    return db('schemes');
}

function findById(id) {
    if (!db('schemes')) 
    return Promise.resolve(null)

    return db('schemes')
    .where ({id})
    .first()
}

function findSteps(id) {

}

function add(scheme) {

}

function update(changes, id) {

}

function remove(id) {

}
