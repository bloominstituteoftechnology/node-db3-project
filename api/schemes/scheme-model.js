const db = require("../../data/db-config");

function find() {
	return db
		.select("sc.*")
		.count({ number_of_steps: "st.step_id" })
		.from("schemes as sc")
		.leftJoin("steps as st", "sc.scheme_id", "st.scheme_id")
		.groupBy("sc.scheme_id")
		.orderBy("sc.scheme_id");
}

async function findById(scheme_id) {
	const results = await db
		.where("sc.scheme_id", parseInt(scheme_id))
		.select("sc.*", "st.step_id", "st.step_number", "st.instructions")
		.from("schemes as sc")
		.leftJoin("steps as st", "sc.scheme_id", "st.scheme_id")
		.orderBy("st.step_number");

	return results.reduce((acc, step) => {
		const { step_id, step_number, instructions } = step;
		if (acc.scheme_id) {
			acc.steps.push({ step_id, step_number, instructions });
		} else {
			acc = {
				scheme_id: step.scheme_id,
				scheme_name: step.scheme_name,
				steps: step_id ? [{ step_id, step_number, instructions }] : [],
			};
		}
		return acc;
	}, {});
}

function findSteps(scheme_id) {
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

function add(scheme) {
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
};
