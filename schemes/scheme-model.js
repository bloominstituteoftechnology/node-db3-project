const db = require('../data/dbConfig');

function find() {
  return db('schemes');
}

function findById(id) {
  return db('schemes')
  .where({id})
  .first();
}

function findSteps(scheme_id) {
  return db("steps")
  .join("schemes", "schemes.id", "steps.scheme_id")
  .select("steps.instructions", "steps.step_number")
  .where({scheme_id})
}

// function findSteps(id) {
//   return db("schemes")
//   .join("steps", "schemes.id", "steps.scheme_id")
//   .select("steps.id")
//   .where("schemes.id", id)
//   .orderBy("steps.step_number");
// }


function add(scheme) {
  return db("schemes")
  .insert(scheme)
  .then((id) => {
    return findById(id[0]);
  });
}

// function add(scheme) {
//   return db("schemes")
//   .insert(scheme, );
// }

function update(changes, id) {
  return db("schemes")
  .update(changes)
  .where({id});
}

function remove(id) {
  return db("schemes")
  .del()
  .where({id});
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};





