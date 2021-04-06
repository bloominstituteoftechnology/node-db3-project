const db = require('../../data/db-config');

function find() { // EXERCISE A
  return db('schemes as sc')
		.leftJoin('steps as st', 'sc.scheme_id', 'st.scheme_id')
		.groupBy('sc.scheme_id')
		.orderBy('sc.scheme_id', 'asc')
		.select('sc.*')
		.count('st.step_id as number_of_steps');
}

async function findById(scheme_id) { // EXERCISE B
  const steps = await db('schemes as sc')
    .leftJoin('steps as st', 'sc.scheme_id', 'st.scheme_id')
    .where('sc.scheme_id', scheme_id)
    .orderBy('st.step_number', 'asc')
    .select('sc.scheme_name', 'sc.scheme_id', 'st.step_id', 'st.step_number', 'st.instructions');
		
	let formattedSteps = {};
	console.log(steps);

	if (steps) {
		formattedSteps = {
			scheme_id: steps[0].scheme_id,
			scheme_name: steps[0].scheme_name,
			steps: steps[0].step_id == null ? [] : steps.map(step => {
				return {
					step_id: step.step_id,
					step_number: step.step_number,
					instructions: step.instructions,
				};
			}),
		}
  } else {
		return null;
	}
  
  return formattedSteps;

}

async function findSteps(scheme_id) {
	// EXERCISE C

	const steps = await db('schemes as sc')
		.leftJoin('steps as st', 'sc.scheme_id', 'st.scheme_id')
		.where('sc.scheme_id', scheme_id)
		.orderBy('st.step_number', 'asc')
		.select('scheme_name', 'step_id', 'step_number', 'instructions');

	if (steps[0].step_number == null) {
		return [];
	} else {
		return steps;
	}
}

async function add(scheme) { // EXERCISE D
	const id = await db('schemes').insert(scheme)

	return db('schemes').where({ scheme_id: id }).first();

  /*
    1D- This function creates a new scheme and resolves to _the newly created scheme_.
  */
}

async function addStep(scheme_id, step) { // EXERCISE E
	await db('steps').insert({ scheme_id: scheme_id, ...step});

	return db('steps').where({ scheme_id: scheme_id}).orderBy('step_number', 'asc');

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
}
