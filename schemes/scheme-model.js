const db = require('../data/db-config.js');

function find() {
    return db('Schemes')
}

function findById(id) {
    return db('Schemes').where({ id });
}

function findSteps (id) {
    return db('steps as p')
    .join('Schemes as s', 's.id', 'p.Scheme_id')
    .select('p.id', 's.scheme_name', 'p.instructions')
    .where({ scheme_id: id});
}

function add(schemeData) {
    return db('Schemes').insert(schemeData);
}

function update(changes, id) {
    return db('Schemes').where({id}).update(changes);
}

function remove(id) {
    return db('Schemes').where({id}).del();
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
};