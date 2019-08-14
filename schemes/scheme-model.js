const db = require("../db-config");

module.exports = {
  find,
  findById,
  //   findSteps,
  add,
  update,
  remove
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({ id: id });
}

function add(scheme) {
  return db("schemes").insert(scheme);
}

function update(changes, id) {
  return db("schemes")
    .where({ id: id })
    .update(changes);
}

function remove(id) {
  return db("schemes")
    .where({ id: id })
    .del();
}
