const db = require("../data/dbConfig.js");


function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({ id });
}

function findSteps(id) {
  return db("schemes")
    .join("steps", "schemes.id", "steps.schemes.id")
    .select("steps.id", "schemes.scheme_name", "steps.step_number", "steps.instructions")
    .where("scheme.id", id)
    .orderBy("steps.step_number");
}

function add(scheme) {
  return db("schemes").insert(scheme);
}

function update(changes, id) {
  return db("schemes")
  .update(changes)
  .where({ id })    
}

function remove(id) {
  return db("schemes")
    .del()
    .where({ id })
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};
