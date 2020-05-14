const db = require("../data/db-config.js");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  update,
  remove,
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where("id", id).first();
}

function findSteps(id) {
  return db("steps as st")
    .where("scheme_id", id)
    .join("schemes as sc", "st.scheme_id", "=", "sc.id")
    .select("st.id", "sc.scheme_name", "st.step_number", "st.instructions")
    .orderBy("st.step_number");
}
// function all() {
//     /*
//       select p.contents as quote, u.username as saidBy
//       from posts as p
//       join users as u on p.user_id = u.id;
//     */

//     return db("posts as p")
//       .join("users as u", "p.user_id", "=", "u.id")
//       .select("p.contents as quote", "u.username as saidBy");
//   }

//   function findById(id) {
//     return db("posts").where("id", id).first();
//   }

//   function add(post) {
//     return db("posts")
//       .insert(post, "id")
//       .then(ids => {
//         return findById(ids[0]);
//       });
//   }

//   /*

function add(scheme) {
  return db("schemes")
    .insert(scheme, "id")
    .then((ids) => {
      return findById(ids[0]);
    });
}

function addStep(stepData, id) {
  return db("steps")
    .insert(stepData, "id")
    .then((ids) => {
      return findById(ids[0]);
    });
}

/*
db('schemes') => a promise that resolves to a user
findById  => a promise that resolves to a user
add  => a promise that resolves to a user
post
*/

function update(changes, id) {
  return db("schemes as sc")
    .where({ id }) //{id} grabbing whole object
    .update(changes)
    .then(() => {
      return findById(id);
    });
}
// return db("steps as st")
// .where("scheme_id", id)
// .join("schemes as sc", "st.scheme_id", "=", "sc.id")
// .select("st.id", "sc.scheme_name", "st.step_number", "st.instructions")
// .orderBy("st.step_number");
// }

function remove(id) {
  return db("schemes as sc").where({ id }).del();
}
