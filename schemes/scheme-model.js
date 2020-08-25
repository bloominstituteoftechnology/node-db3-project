const db = require('../data/config.js')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find() {
    return db("schemes");
}

function findById(id) {
    return db("schemes")
    .where({ id })
    .first();
}

function findSteps(schemeId) {
    return db('steps as st')
    .join('schemes as sc', 'sc.Id', 'st.scheme_id')
    .select('sc.id', 'sc.scheme_name as Scheme', 'st.step_number as Step', 'st.instructions')
    .where('st.scheme_id', schemeId)
}

function add(scheme) {
    return db('schemes')
    .insert(scheme)
    .then(ids => {
        return findById(ids[0]);
    });
}

function update(id, changes) {
    return db('schemes')
    .where("id", id)
    .update(changes);
}

function remove(id) {
    return db('schemes')
    .where('id', id)
    .del();
}