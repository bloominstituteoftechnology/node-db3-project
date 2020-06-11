const knex = require('knex');

const config = require('../knexfile.js');

const db = knex(config.development);

module.exports = {
	find,
	findById,
	findSteps,
	add,
	update,
    remove,
    addStep
};

function find() {
	return db('schemes');
}

function findById(id) {
	return db('schemes').where({ id }).first();
}

function findSteps(id) {
	return db('schemes')
		.join('steps')
		.select(
			'schemes.id as schemesId',
			'schemes.scheme_name',
			'steps.step_number',
			'steps.step_number',
			'steps.instructions'
		)
        .where({ schemesId: id })
        .orderBy('steps.step_number')
}

function add(scheme) {
    return db('schemes')
    .insert(scheme, "id")
    .then((ids) => {
      return findById(ids[0]);
    });
}

function update(changes, id) {
	console.log('update');
	return db('schemes').where({ id }).update(changes);
}

// stretch
// POST /api/schemes/:id/addStep to test this method.
function addStep(step, scheme_id) {
      return db('steps as st')
        .join('schemes as sc', 'sc.id', 'st.scheme_id')
        .select('st.id', 'sc.scheme_name', 'st.instructions')
        .where({ id: scheme_id })
        .insert({...step, scheme_id})
    }

// test
// function addStep(step, scheme_id) {
//     return db('steps as st')
//       .insert({...step, scheme_id})
//       .then((id) => {
//           return db('steps as st')
//         .where({'st.id': id })
//         .join('schemes as sc', 'sc.id', 'st.scheme_id')
//         .select('st.id', 'sc.scheme_name', 'st.instructions', 'st.step_number')
//       })  
//   }

function remove(id) {
	return db('schemes').where('id', id).del();
}
