const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};

const find = () => {
  return db("schemes");
};

const findById = id => {
  return db("schemes").where({ id });
};

const findSteps = id => {
  return db("steps").where({ scheme_id: id });
};

const add = scheme => {
  return db("schemes").insert(scheme);
};

const update = (changes, id) => {
  return db("schemes")
    .where({ id })
    .update(changes)
    .then(() => findById(id));
};

const remove = id => {
  return db("schemes")
    .where({ id })
    .del();
};
