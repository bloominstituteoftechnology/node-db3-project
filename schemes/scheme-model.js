const db = require('../data/db-config.js');

module.exports = {
  find,
  findById,
  findSteps,
  add,
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

function findSteps(schemeId) {
  return db('steps as st')
    .join('schemes as s', 's.id', 'st.scheme_id')
    .where({ scheme_id: schemeId });
}

function add(scheme) {
  return db('schemes')
    .insert(scheme, 'id')
    .then(([id]) => {
      return findById(id);
    });
}
function update(id, changes) {
    return db('schemes')
      .where({ id })
      .update(changes);
  }
  
  function remove(id) {
    return db('schemes')
      .where('id', id)
      .del();
  }

