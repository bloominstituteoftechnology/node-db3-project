const db = require('../data/dbConfig');

const find = () => {
	return db('schemes');
};

const findById = (id) => {
	return db('schemes').where({ id }).first();
};

const findSteps = (scheme_id) => {
	return db
		.select('*', 'scheme_name')
		.from('steps as st')
		.where({ scheme_id })
		.join('schemes as sc', 'st.scheme_id', 'sc.id')
		.orderBy('st.step_number');
};

const add = (scheme) => {
	return db('schemes')
		.insert(scheme)
		.then((ids) => {
			return findById(ids[0]);
		});
};

const update = (id, changes) => {
	return db('schemes').where({ id }).update(changes);
};

const remove = (id) => {
	return db('schemes').where({ id }).del();
};

module.exports = {
	find,
	findById,
	findSteps,
	add,
	update,
	remove,
};
