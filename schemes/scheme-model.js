const db = require('../data/db-config.js');

function find() {
  return db('schemes');
}
function findById(id) {
  return db('schemes')
    .where({ id })
    .first();
}
function findSteps(id) {
  return db('steps as st')
    .join('schemes as sc', 'sc.id', 'st.scheme_id')
    .where('st.scheme_id', id)
    .select('st.id', 'st.step_number', 'sc.scheme_name', 'st.instructions')
    .orderBy('st.step_number', 'asc');
}
function add(dataToInsert) {
  return db('schemes').insert(dataToInsert);
}
function update(change, id) {
  return db('schemes').where({ id }).update(change);
}
// eslint-disable-next-line camelcase
function addStep(step, scheme_id) {
// console.log('step', step);
  return db('steps as st')
    .join('schemes as sc', 'sc.id', 'st.scheme_id')
    .select('st.id', 'sc.scheme_name', 'st.instructions')
    .where({ id: scheme_id })
    .insert(step);
}

function remove(id) {
  return db('schemes')
    .where({ id }).del();
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
  addStep,
};
