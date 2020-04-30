const db = require("../data/db-config");

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({ id }).first();
}

function findSteps(id) {
  return db("steps")
    .join("schemes", "schemes.id", "steps.scheme_id")
    .select("steps.id", "scheme_name", "step_number", "instructions")
    .where("schemes.id", id)
    .orderBy("step_number");
}

async function add(scheme) {
  const [id] = await db("schemes").insert(scheme);

  return findById(id);
}

function update(changes, id) {
  return db("schemes").where({ id }).update(changes, "*");
}

//MALANI  GRACE TULLOCH 5

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
};
