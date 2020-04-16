const db = require("../data/db-config");

module.exports = {
	find,
	findById,
	findSteps,
	add,
	update,
	remove,
};

function find() { 
	return db("schemes");
}

function findById(id) {
	return db("schemes").where({ id }).first();
}

function findSteps(id) {
	return db("schemes")
		.join("steps", "schemes.id", "steps.scheme_id")
		.select(
			"steps.id",
			"schemes.scheme_name",
			"steps.step_number",
			"steps.instructions"
		)
		.where({ scheme_id: id });
}

function add(scheme) {
	return db("schemes")
		.insert(scheme)
		.then(([id]) => findById(id));
}

function update(changes, id) {
	return db("schemes")
		.where({ id })
		.update(changes)
		.then(() => findById(id));
}

function remove(id) {
	return findById(id).then((scheme) => {
		return db("schemes")
			.where({ id })
			.del()
			.then(() => scheme);
	});
}