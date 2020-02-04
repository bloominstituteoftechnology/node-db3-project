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
  /*
  return db("steps")
    .select("st.id", "s.scheme_name", "st.step_number", "st.instructions")
    .join("steps as st", "s.id", "st.scheme_id")
    .where("s.id", "id");
    */
  return db("steps")
    .where({ scheme_id: id })
    .select("step_number", "instructions", "scheme_id", "id");
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
