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

	if (!results.length) return null;

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

async function findSteps(scheme_id) {
	const results = await db
		.where("sc.scheme_id", parseInt(scheme_id))
		.select("sc.scheme_name", "st.step_id", "st.step_number", "st.instructions")
		.from("schemes as sc")
		.leftJoin("steps as st", "sc.scheme_id", "st.scheme_id")
		.orderBy("st.step_number");

	return results.filter((step) => step.step_number);
}

async function add(scheme) {
	const [scheme_id] = await db("schemes").insert(scheme);
	return db("schemes").where({ scheme_id }).first();
}

async function addStep(scheme_id, step) {
	// EXERCISE E
	/*
    1E- This function adds a step to the scheme with the given `scheme_id`
    and resolves to _all the steps_ belonging to the given `scheme_id`,
    including the newly created one.
  */
	const { step_number, instructions } = step;
	await db("steps").insert({ step_number, instructions, scheme_id });
	return findSteps(scheme_id);
}

module.exports = {
	find,
	findById,
	findSteps,
	add,
	addStep,
};
