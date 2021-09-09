const db = require("../../data/db-config");

function find() {
  return db("schemes as sc")
    .select("sc.*")
    .count("st.step_id as number_of_steps")
    .leftJoin("steps as st", "sc.scheme_id", "st.scheme_id")
    .groupBy("sc.scheme_id")
    .orderBy("sc.scheme_id");
  // EXERCISE A
  /*
    1A- Study the SQL query below running it in SQLite Studio against `data/schemes.db3`.
    What happens if we change from a LEFT join to an INNER join?

      SELECT
          sc.*,
          count(st.step_id) as number_of_steps
      FROM schemes as sc
      LEFT JOIN steps as st
          ON sc.scheme_id = st.scheme_id
      GROUP BY sc.scheme_id
      ORDER BY sc.scheme_id ASC;

    2A- When you have a grasp on the query go ahead and build it in Knex.
    Return from this function the resulting dataset.
  */
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

  // EXERCISE B
  /*
    1B- Study the SQL query below running it in SQLite Studio against `data/schemes.db3`:

      SELECT
          sc.scheme_name,
          st.*
      FROM schemes as sc
      LEFT JOIN steps as st
          ON sc.scheme_id = st.scheme_id
      WHERE sc.scheme_id = 1
      ORDER BY st.step_number ASC;

    2B- When you have a grasp on the query go ahead and build it in Knex
    making it parametric: instead of a literal `1` you should use `scheme_id`.

    3B- Test in Postman and see that the resulting data does not look like a scheme,
    but more like an array of steps each including scheme information:

      [
        {
          "scheme_id": 1,
          "scheme_name": "World Domination",
          "step_id": 2,
          "step_number": 1,
          "instructions": "solve prime number theory"
        },
        {
          "scheme_id": 1,
          "scheme_name": "World Domination",
          "step_id": 1,
          "step_number": 2,
          "instructions": "crack cyber security"
        },
        // etc
      ]

    4B- Using the array obtained and vanilla JavaScript, create an object with
    the structure below, for the case _when steps exist_ for a given `scheme_id`:

      {
        "scheme_id": 1,
        "scheme_name": "World Domination",
        "steps": [
          {
            "step_id": 2,
            "step_number": 1,
            "instructions": "solve prime number theory"
          },
          {
            "step_id": 1,
            "step_number": 2,
            "instructions": "crack cyber security"
          },
          // etc
        ]
      }

    5B- This is what the result should look like _if there are no steps_ for a `scheme_id`:

      {
        "scheme_id": 7,
        "scheme_name": "Have Fun!",
        "steps": []
      }
  */
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
  // EXERCISE C
  /*
    1C- Build a query in Knex that returns the following data.
    The steps should be sorted by step_number, and the array
    should be empty if there are no steps for the scheme:

      [
        {
          "step_id": 5,
          "step_number": 1,
          "instructions": "collect all the sheep in Scotland",
          "scheme_name": "Get Rich Quick"
        },
        {
          "step_id": 4,
          "step_number": 2,
          "instructions": "profit",
          "scheme_name": "Get Rich Quick"
        }
      ]
  */
}

async function add(scheme) {
  const newId = await db("schemes").insert(scheme);
  return findById(newId[0]);
  // EXERCISE D
  /*
    1D- This function creates a new scheme and resolves to _the newly created scheme_.
  */
}

function addStep(scheme_id, step) {
  // EXERCISE E
  /*
    1E- This function adds a step to the scheme with the given `scheme_id`
    and resolves to _all the steps_ belonging to the given `scheme_id`,
    including the newly created one.
  */
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  checkSchemeId,
};
