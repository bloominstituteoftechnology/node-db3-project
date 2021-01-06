// scheme-model
const db = require('../../data/db-config');

function find() {
    return db.select('*').from('schemes');
}

function findById(id) {
    return db.select('*').from('schemes').where('id', id)
}

function findSteps(id) {
    return db.select('instructions').from('steps').where('scheme_id', id).orderBy('step_number')
}

function add(scheme) {
    return db.insert(scheme).into('schemes')
}

function update(changes, id) {
    return db.select('*').from('schemes').where('id', id).update(changes);
}

function remove(id) {
    return db.select('*').from('schemes').where('id', id).del();
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
}