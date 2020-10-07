const db = require("../data/dbConfig");

module.exports = {
  find,
  findById,
  // findSteps,
  // add,
  // update,
  // remove,
  // addStep
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({ id }).first();
}

function findSteps(id) {
  return db("steps").where("scheme_id", id);
}
