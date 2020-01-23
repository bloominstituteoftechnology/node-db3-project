const db = require('../data/dbConfig.js')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    addStep,
    update,
    remove
}

function find() {
    return db.select("*").from("Schemes")
}

function findById(id) {
    return db.select("*").where({id}).from("Schemes")
}

function findSteps(id) {
    return db.select("*").from("steps").where({id})
}

function add(scheme) {
  return db("Schemes")
    .insert(scheme)
    .then(ids => {
      return findById(ids[0]);
    });
}

function addStep(step, id) {
  return db("steps").insert(step).where({scheme_id : id});
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