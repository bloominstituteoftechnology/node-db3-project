const db = require('../dbConfig');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  update,
  remove,
  addStep
};

function find() {
  return db('schemes');
}

function findById(id) {
  return db('schemes')
    .where({id})
    .first();
}

function findSteps(id) {
  return db('steps')
    .where({scheme_id: id})
    .orderBy('step_number');
}

function add(schemeData) {
  return db('schemes').insert(schemeData);
}

function addStep(stepData, id) {
  return db('steps')
    .where({scheme_id: id})
    .insert(stepData);
}

function update(changes, id) {
  return db('schemes')
    .where({id})
    .update(changes);
}

function remove(id) {
  return db('schemes')
    .where({id})
    .del();
}
