const db = require('../data/db-config');

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

// GET all schemes
function find() {
  return db('schemes');
}

// GET by id
function findById(id) {
  return db('schemes')
    .where({ id })
    .then(scheme => {
      if (scheme) {
        return scheme[0];
      } else {
        return null;
      }
    });
}

// POST
function add(newData) {
  return db('schemes')
    .insert(newData)
    .then(id => findById(id[0]));
}

// PUT
function update(changes, id) {
  return db('schemes')
    .where({ id })
    .update(changes)
    .then(scheme => {
      return findById(id);
    });
}

// DELETE
function remove(id) {
  console.log(id);
  return findById(id).then(schemeId => {
    if (schemeId) {
      return db('schemes')
        .where({ id })
        .del();
    } else {
      return null;
    }
  });
}
