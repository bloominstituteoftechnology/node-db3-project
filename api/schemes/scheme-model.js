const db = require('../../data/db-config')

function find() {
// EXERCISE A
 return db("schemes as sc")
    .select('sc.*')
    .count('st.step_id as number_of_steps')
    .leftJoin("steps as st", {'sc.scheme_id': 'st.scheme_id'})
    .groupBy('sc.scheme_id')
    .orderBy('sc.scheme_id', 'asc')
}

function findById(scheme_id) {
  // EXERCISE B
  // const schemeQuery = find().where({scheme_id}).first();

    return db('schemes as sc')
    .select('sc.scheme_name', 'st.*')
    .leftJoin('steps as st', 'sc.scheme_id', 'st.scheme_id')
    .where('sc.scheme_id', scheme_id)
    .orderBy('st.step_number', 'asc')
    .first()
}

function findSteps(scheme_id) {
// EXERCISE C
  return db('steps as st')
    .select('st.step_id', 'st.step_number', 'st.instructions', 'sc.scheme_name')
    .leftJoin('schemes as sc', 'sc.scheme_id', 'st.scheme_id')
    .where('sc.scheme_id', scheme_id)
    .orderBy('st.step_number', 'asc')
}

function add(scheme) {
// EXERCISE D
  return db('schemes as sc')
    .insert(scheme)
    .then(([scheme_id]) => findById(scheme_id))
}

function addStep(scheme_id, step) {
  // EXERCISE E
  return db('steps as st')
    .insert(step, scheme_id)
    .then(([scheme_id]) => findSteps(scheme_id))
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
}
