const db = require("../data/db-config");

const find = () => db("schemes");

const findById = id => {
  return db("schemes").where({
    id
  }).first(); // .first will return it as only an object, instead of inside of an array
};

const findSteps = id => {
  return db("steps as s")
    .join("schemes as sc", "sc.id", "s.scheme_id")
    .select("sc.scheme_name", "s.id", "s.step_number", "s.instructions")
    .where({
      scheme_id: id
    })
    .orderBy("s.step_number")
}

const add = scheme => db("schemes").insert(scheme);

const update = (changes, id) => {
  return updated = db("schemes").update(changes).where({
    id
  })
};

const remove = id => {
  return db("schemes").where({
    id
  }).del();
};

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};