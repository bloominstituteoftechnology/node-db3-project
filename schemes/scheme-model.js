const db = require("../data/db-config.js");

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};

function find() {
  return db("scheme");
}

function findById(id) {
  return db("scheme").where("id", id).first();
}

function add(user) {
  return db("scheme")
    .insert(user, "id")
    .then((ids) => {
      return findById(ids[0]);
    });
}

/*
db('scheme') => a promise that resolves to a user
findById  => a promise that resolves to a user
add  => a promise that resolves to a user
post
*/

function update(id, changes) {
  return db("scheme").where({ id }).update(changes);
}

function remove(id) {
  return db("scheme").where({ id }).del();
}
