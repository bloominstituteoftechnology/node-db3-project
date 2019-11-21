const db = require('../data/db-config');

function find () {
    return db('schemes');
}

function findByID(id) {
    return db('schemes').where({ id });
}

function findSteps(id) {
    return db('schemes as s')
      .join('steps as st', 'st.id', 's.id')
      .select('s.id', 's.scheme_name', 'st.step_number', 'st.instructions')
      .where({ s_id: id})
}

function add(schemeData) {
    return db('users').insert(schemeData);
}

function update(changes, id) {
    return db('users').where({ id }).update(changes);
}

function remove(id) {
    return db('schemes').where( { id }).del();
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
};