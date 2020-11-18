const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  //   update,
  //   remove,
};

async function find() {
  try {
    return await db("schemes");
  } catch (err) {
    throw err;
  }
}

async function findById(id) {
  try {
    const scheme = await db("schemes").where({ id }).first();
    return scheme;
  } catch (err) {
    throw err;
  }
}

async function findSteps(id) {
  try {
    const steps = await db("schemes as s")
      .join("steps as st", "st.scheme_id", "s.id")
      .where({ "s.id": id })
      .select("s.scheme_name", "st.step_number", "st.instructions")
      .orderBy("st.step_number");
    return steps;
  } catch (err) {
    throw err;
  }
}

async function add(scheme) {
  try {
    const id = await db("schemes").insert(scheme);
    const newScheme = await findById(id[0]);
    return newScheme;
  } catch (err) {
    throw err;
  }
}
