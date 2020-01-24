const db = require('../data/dbConfig.js');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  update,
  remove,
};

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
    .join('schemes as s', 's.id', 'st.scheme_id')
    .select('s.scheme_name', 'st.id as step_id', 'st.step_number', 'st.instructions')
    .where('st.scheme_id', id)
    .orderBy('st.step_number');
}

function add(scheme) {
  return db('schemes')
    .insert(scheme)
    .then(ids => {
      return findById(ids[0]);
    });
}

function addStep(stepData, id) {
    const newStep = {...stepData, scheme_id: id}
    return db('steps')
      .insert(newStep)
      .then(() => {
          return findSteps(id)});
  }

function update(changes, id) {
  return db('schemes')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('schemes')
    .where('id', id)
    .del();
}