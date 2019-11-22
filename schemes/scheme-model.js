const db = require('../data/db-config');

function find () {
    return db('schemes');
}

function findByID(id) {
    return db('schemes')
      .where({ id })
      .first();
}

function findSteps(id) {
    return db('steps as st')
      .join('schemes as s', 'st.scheme_id', 's.id')
      .select('s.scheme_name as Scheme', 'st.step_number as Step', 'st.instructions as Instructions')
      .where({ scheme_id: id})
      .orderBy('step');
};

function add(scheme) {
    return db('schemes')
    .insert(scheme);
}

function update(changes, id) {
    return db('schemes')
    .where({ id })
    .update(changes);
}

function remove(id) {
    return db('schemes')
      .where( { id })
      .del();
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
};