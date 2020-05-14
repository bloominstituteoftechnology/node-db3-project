const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({ id });
}

function findSteps(id) {
  return db("schemes as sc")
    .select("sc.id", "scheme_name", "step_number", "instructions")
    .join("steps as s")
    .where({ scheme_id: id })
    .orderBy("step_number");
}

function add(scheme) {
  // console.log(scheme)
  return db("schemes as sc")
    .insert(scheme, "id")
    .then((ids) => {
      return findById(ids[0]);
    });
}

function update(changes, id) {
  return db("schemes").update(changes).where({ id });
}

function remove(id) {
  return db("schemes").del().where({ id });
}
