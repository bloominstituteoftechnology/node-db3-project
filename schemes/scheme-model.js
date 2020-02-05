const db = require("../utils/schemesDb.js");

const dbInput = "schemes";

const find = () => {
  return db(dbInput);
};

const findById = id => {
  console.log("findById:", id);
  return db(dbInput)
    .where({ id }) //searching by id
    .first(); //first data that matches
};

const add = async newInput => {
  //inserts new data, and returns an ID
  const [id] = await db(dbInput).insert(newInput);
  return findById(id);
};

const findSteps = id => {
  return db("steps as st")
    .join("schemes as sc", "sc.id", "st.scheme_id")
    .select("st.id", "sc.scheme_name", "st.step_number", "st.instructions")
    .where({ scheme_id: id })
    .orderBy("st.step_number");
};

const update = async (changes, id) => {
  console.log("update", id, changes);
  await db(dbInput)
    .where({ id })
    .update(changes, "*");
  return findById(id);
};

const remove = id => {
  return db(dbInput)
    .where({ id })
    .del();
};

const addStep = async (stepData, id) => {
  console.log("addStep", stepData, id);
  const newStep = {
    scheme_id: id,
    step_number: stepData.step_number,
    instructions: stepData.instructions
  };
  await db("steps").insert(newStep);
  return findSteps(id);
};

module.exports = {
  remove,
  update,
  findSteps,
  add,
  findById,
  find,
  addStep
};
