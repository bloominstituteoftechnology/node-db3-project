const db = require('../data/db-config');

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
  return db('schemes').where({ id }).first();
}

function findSteps(id) {
  return db('schemes')
    .where('schemes.id', '=', id)
    .join('steps', 'schemes.id', '=', 'steps.scheme_id')
    .select('schemes.scheme_name', 'steps.instructions');
}

function add(data) {
  return db('schemes').insert(data);
}

function addStep(stepData, id) {
  return db('steps').insert(stepData, id);
}

function update(changes, id) {
  return db('schemes').where({ id }).update(changes, id);
}

function remove(id) {
  return db('schemes').where({ id }).del();
}
