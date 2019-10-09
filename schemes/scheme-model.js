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
    .select('st.id', 'st.contents as quote', 'u.username as saidBy')
    .where({ user_id: userId });
}

function add(user) {
  return db('users')
    .insert(user, 'id')
    .then(([id]) => {
      return findById(id);
    });
}
