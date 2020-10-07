module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
  addStep,
};

const { where } = require("../data/seeds/db-config");
const db = require("../data/seeds/db-config");

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({ id });
}

function findSteps(id) {
  return db("steps").where("scheme_id", id);
}

function add(addition) {
  return db("schemes")
    .insert(addition, "id")
    .then((ids) => {
      const id = ids[0];
      return findById(id);
    });
}

function addStep(steps, id) {
  return db("steps").insert(steps, "id").where("scheme_id", id);
}

function update(changes, id) {
  return db("schemes").where({ id }).update(changes);
}

function remove(id) {
  return db("schemes").delete().where({ id });
}
