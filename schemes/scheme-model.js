const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  findSteps,
  // add,
  // addStep
  // update
  remove,
};

// // --> return all known schemes <-- // //
function find() {
  return db("schemes");
}

// // --> return specific scheme using scheme id <-- // //
function findById(id) {
  //  [a]
  return db("schemes").where({ id }).first();
}

// // --> return all steps using scheme :id <-- // //
function findSteps(id) {
  return db("steps").where({ scheme_id: id });
}

// // --> remove scheme using scheme id <-- // //
function remove(id) {
  //  [b]
  return db("schemes").where({ id }).del();
}

//  [a] : {id} is the same as {id: id} which means id === id in SQL speak
//  first()
//  --> an array is always returned whether its empty or not

//  [b] : del() does the magic
