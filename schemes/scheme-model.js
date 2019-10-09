const db = require("../db");

function find() {
  return db.select("*").from("schemes");
}

async function findById(id) {
  const [scheme] = await db
    .select("*")
    .from("schemes")
    .where({ id });

  return scheme ? scheme : null;
}

function findSteps(id) {
  return db
    .from("schemes")
    .innerJoin("steps", "schemes.id", "steps.scheme_id")
    .select(
      "steps.id",
      "schemes.scheme_name",
      "steps.step_number",
      "steps.instructions"
    )
    .orderBy("steps.step_number")
    .where({ scheme_id: id });
}

async function add(scheme) {
  const [id] = await db.from("schemes").insert(scheme);
  const newScheme = await db
    .select("*")
    .from("schemes")
    .where({ id });

  return newScheme;
}

async function update(changes, id) {
  await db
    .from("schemes")
    .update(changes)
    .where({ id });

  return db.from("schemes").where({ id });
}

async function remove(id) {
  const [scheme] = await db.from("schemes").where({ id });

  if (!scheme) {
    return null;
  }

  await db
    .from("schemes")
    .del()
    .where({ id });

  return scheme;
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};