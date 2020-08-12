const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  // addStep, // (stretch)
  update,
  remove,
};

// // --> return all known schemes <-- // //
function find() {
  return db("schemes");
}

// // --> return specific scheme using scheme id <-- // //
function findById(id) {
  // console.log("findById -> id", id);
  //  [a]
  return db("schemes").where({ id }).first();
}

// // --> return all steps using scheme :id <-- // //
function findSteps(id) {
  return db("steps").where({ scheme_id: id });
}

// // --> add a new scheme + return scheme object w/id <-- // //
function add(scheme) {
  return db("schemes")
    .insert(scheme)
    .then((ids) => {
      const id = ids[0];
      return findById(id);
    });
}

// // --> add new step to scheme + return <-- // //
// (STRETCH)

// // --> update scheme + return updated scheme object  <-- // //
function update(changes, id) {
  return db("schemes")
    .where({ id })
    .update(changes)
    .then(() => {
      return findById(id);
    });
}

// // --> remove scheme using scheme id <-- // //
function remove(id) {
  return db("schemes").where({ id }).del();
}

//  [a] : {id} is the same as {id: id} which means id === id in SQL speak
//  first()
//  --> an array is always returned whether its empty or not
