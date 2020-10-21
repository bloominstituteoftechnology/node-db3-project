const db = require("../data/config")

function find() {
  // SELECT * FROM schemes;
  return db.select("*").from("schemes")
}

function findById(id) {
  // SELECT * FROM schemes AS s WHERE s.id = ?;
  return db.select("*").from("schemes as s").where("s.id", id)
}

function findSteps(id) {
  // SELECT
	//   steps.id,
	//   schemes.scheme_name,
	//   steps.step_number,
	//   steps.instructions
  // FROM steps
  // JOIN schemes ON schemes.id = steps.scheme_id
  // WHERE steps.scheme_id = 1;
  return db("steps")
  .innerJoin("schemes", "steps.scheme_id", "schemes.id")
  .where("steps.scheme_id", id)
  .select("steps.id", "schemes.scheme_name", "steps.step_number", "steps.instructions")
  .orderBy("steps.step_number")
}

function add(scheme) {
  return db("schemes").insert(scheme)
}

function update(changes, id) {
  return db("schemes")
    .where("schemes.id", id)
    .update(changes)
}

function remove(id) {
  return db("schemes")
    .where("schemes.id", id)
    .del()
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
}