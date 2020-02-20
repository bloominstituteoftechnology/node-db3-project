/* jshint esversion: 6 */
const db = require("../data/db-config.js");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes")
    .where({ id })
    .first();
}

function findSteps(id) {
  return db("schemes")
    .join("steps", "schemes.id", "steps.scheme_id")
    .select(
      "schemes.id",
      "schemes.scheme_name",
      "steps.step_number",
      "steps.instructions"
    )
    .where("schemes.id", id);
  // .orderBy("steps.step_number", "asc");
}

function add(scheme) {
  return db("schemes")
    .insert(scheme)
    .then(([id]) => {
      return findById(id);
    });
}

function update(id, changes) {
  return db("schemes")
    .where({ id })
    .update(changes)
    .then(changes => {
      return changes;
    });
}

function remove(id) {
  return db("schemes")
    .where({ id })
    .del();
}
