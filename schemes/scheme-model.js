const db = require("../data/config");

function find() {
  return db("Schemes");
}

function findById(id) {
  return db("Schemes")
    .where({ id })
    .first();
}

function findSteps(id) {
  return db("steps")
    .innerJoin("schemes", "schemes.id", "steps.scheme_id")
    .where("steps.scheme_id", id)
    .select("schemes.scheme_name", "steps.step_number", "steps.instructions")
    .orderBy("steps.step_number");
}

function add(scheme) {
  return db("schemes")
    .insert(scheme, "id")
    .then(([id]) => findById(id));
}

function update(changes, id) {
  return db("schemes")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("schemes")
    .where({ id })
    .delete();
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};
