
const db = require('./db.config');

function find() {
   return db('schemes')
}

function findById(id) {
    return db('schemes').where({id})
}

function findSteps(id) {
    return db('schemes').where({id})
}

function add(scheme) {
    return db('schemes').insert(scheme)
}

function update(changes, id) {
    return db('schemes').where({id}).update( changes)
}

function remove(id) {
    return db('schemes').where({id}).del();
}

module.exports = {
    find, 
    findById, 
    findSteps, 
    add, 
    update, 
    remove
}