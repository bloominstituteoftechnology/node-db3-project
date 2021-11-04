const db = require("../../data/db-config.js");

function find() {
  return db("schemes as sc")
    .select("sc.*")
    .leftJoin("steps as st", "sc.scheme_id", "st.scheme_id")
    .count("st.step_id as number_of_steps")
    .groupBy("sc.scheme_id");
}

async function findById(scheme_id) {
  const rows = await db("schemes as sc")
    .leftJoin("steps as st", "sc.scheme_id", "st.scheme_id")
    .select("sc.scheme_name", "st.*")
    .where("sc.scheme_id", scheme_id)
    .orderBy("st.step_number", "ASC");

  const result = {
    scheme_id: Number(scheme_id),
    scheme_name: rows[0].scheme_name,
    steps: rows[0].step_id
      ? rows.map((step) => {
          return {
            step_id: step.step_id,
            step_number: step.step_number,
            instructions: step.instructions,
          };
        })
      : [],
  };

  return result;
}

async function findSteps(scheme_id) {
  const rows = await db("schemes as sc")
    .leftJoin("steps as st", "sc.scheme_id", "st.scheme_id")
    .select("sc.scheme_name", "st.*")
    .where("sc.scheme_id", scheme_id)
    .orderBy("st.step_number", "ASC");

  if (rows[0].step_id) {
    return rows;
  } else {
    return [];
  }
}

async function add(scheme) {
  const [scheme_id] = await db("schemes").insert(scheme, [
    "scheme_id",
    "scheme_name",
  ]);
  return findById(scheme_id);
}

async function addStep(scheme_id, step) {
  await db("steps").insert({
    scheme_id: scheme_id,
    step_number: step.step_number,
    instructions: step.instructions,
  });
  return findSteps(scheme_id);
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
};
