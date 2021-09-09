const db = require("../../data/db-config");

function find() {
  return db("schemes as sc")
    .select("sc.*")
    .count("st.step_id as number_of_steps")
    .leftJoin("steps as st", "sc.scheme_id", "st.scheme_id")
    .groupBy("sc.scheme_id")
    .orderBy("sc.scheme_id");
}
async function checkSchemeId(scheme_id) {
  const response = await db("schemes").where("schemes.scheme_id", scheme_id);
  return response;
}

async function findById(scheme_id) {
  const steps = await db("schemes as sc")
    .select("sc.scheme_name", "st.*")
    .leftJoin("steps as st", "sc.scheme_id", "st.scheme_id")
    .where("sc.scheme_id", scheme_id)
    .orderBy("st.step_number");
  // return steps;

  const returnObj = {
    scheme_id: Number(scheme_id),
    scheme_name: steps[0].scheme_name,
  };
  steps.forEach((step, i) => (step.step_id ? "" : steps.splice(i, 1)));

  if (steps.length === 0) {
    returnObj.steps = [];
  } else {
    returnObj.steps = steps.map((step) => ({
      step_id: step.step_id,
      step_number: step.step_number,
      instructions: step.instructions,
    }));
  }
  return returnObj;
}

async function findSteps(scheme_id) {
  const steps = await db("steps as st")
    .select(
      "st.step_id",
      "st.step_number",
      "st.instructions",
      "sc.scheme_name",
      "sc.scheme_id"
    )
    .join("schemes as sc", "sc.scheme_id", "st.scheme_id")
    .where("sc.scheme_id", scheme_id)
    .orderBy("st.step_number");

  steps.forEach((step) => delete step.scheme_id);
  return steps;
}

async function add(scheme) {
  const newId = await db("schemes").insert(scheme);
  return findById(newId[0]);
}

async function addStep(scheme_id, step) {
  const newStep = { scheme_id: Number(scheme_id), ...step };
  await db("steps").insert(newStep);
  return findSteps(Number(scheme_id));
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  checkSchemeId,
};
