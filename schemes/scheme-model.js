const express = require("express");

const db = require("../data/dbConfig");

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
    .join("steps","schemes.id","steps.id")
    .select("schemes.id","schemes.scheme_name","steps.step_number","steps.instructions")
    .where({scheme_id:id})
}

function add(newScheme) {
    return db("schemes")
    .insert(newScheme)
    .then(ids => {
      return findById(ids[0]);
    });
}

function update(changes, id) {
  return db("schemes")
    .where("id", id)
    .update(changes)
    // .then(count => (count > 0 ? get(id) : null));
}

function remove(id) {
  return db("schemes")
    .where("id", id)
    .del();
}

// [ { schemes.id: 17, 
//     schemes.scheme_name:'Find the Holy Grail',
//     steps.step_number: 1, 
//    steps.instructions: 'quest'}, 
    
    
//     { id: 18, 
//         scheme_name: 'Find the Holy Grail', 
//         step_number: 2, 
//         instructions: '...and quest'}, etc. ]

// return db("scheme")
//   .join("scheme", "steps.scheme_id")
//   .select("id", "scheme_name", "step_number", "instructions")
//   .where({scheme_id: id})
// }