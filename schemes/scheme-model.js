const db = require('../data/db-config.js');

function find() {
  return db('schemes');
}

function findById(id) {
  return db('schemes').where({ id });
}

// findSteps('id)

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
  // findSteps,
  add, 
  update, 
  remove
};