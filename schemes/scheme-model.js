const db = require("../data/db-config");

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
  return db("schemes").where({ id });
}
function findSteps(id) {
  return db("steps as s")
    .join("schemes as sc", "scheme_id", "sc.id")
    .select("scheme_name", "step_number", "instructions")
    .where({ scheme_id: id })
    .orderBy("step_number");
}

function add(scheme) {
  return db("schemes")
    .insert(scheme)
    .then(ids => ({ id: ids[0] }));
}

function update(changes, id) {
  return db("schemes")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("schemes")
    .where({ id })
    .del();
}
