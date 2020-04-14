const db = require("../data/db-config");

function find() {
  return db("schemes");
}
function findById(id) {
  return db("schemes").where({ id }).first();
}
function getStepId(id) {
  return db("steps").where({ id }).first();
}
function findSteps(scheme_id) {
  return db("steps as st")
    .join("schemes as sc", "st.scheme_id", "sc.id")
    .select("st.instructions", "st.step_number")
    .where({ scheme_id });
}
function add(scheme) {
  return db("schemes")
    .insert(scheme)
    .then((ids) => {
      return findById(ids[0]);
    });
}
function addStep(step) {
  return db("steps")
    .insert(step)
    .then((ids) => {
      return getStepId(ids[0]);
    });
}
function update(changes, id) {
  return db("schemes")
    .where({ id })
    .update(changes)
    .then(() => findById(id));
}

function remove(id) {
  return db("schemes").where("id", id).del();
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  update,
  remove,
};
