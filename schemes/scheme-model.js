const db = require('../data/db-config.js');

function find() {
  return db('schemes');
}

function findById(id) {
  return db('schemes').where({ id });
}

// function findSteps(id) {
//   return db('steps as s')
//     .select('s.id', 'schemes.scheme_name', 's.step_number', 's.instructions')
//     .join('schemes as sch', 'sch.id', 's.scheme_id')
//     .where( 'scheme_id' , id )
//     .orderBy('s.step_number', 'asc');
// }

function findSteps(id) {
  return db('steps')
      .select('steps.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
      .join('schemes', 'steps.scheme_id', 'schemes.id')
      .where('schemes.id', id)
      .orderBy('steps.step_number', 'asc');
}

function add(schemeData) {
  return db('schemes').insert(schemeData);
}

function update(changes, id) {
  return db('schemes').where({ id }).update(changes);
}

function remove(id) {
  return db('schemes').where({ id }).del();
}

module.exports = {
  find, 
  findById,
  findSteps,
  add, 
  update, 
  remove
};