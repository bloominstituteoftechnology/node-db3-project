const db = require('../data/db-config');

module.exports = {
  find,
  findById,
  add
};

// GET all schemes
function find() {
  return db('schemes');
}

// GET by id
function findById(id) {
  return db('schemes')
    .where({ id })
    .first();
}

// POST
function add(newData) {
  return db('schemes')
    .insert(newData)
    .then(id => findById(id[0]));
}

// PUT

// DELETE
