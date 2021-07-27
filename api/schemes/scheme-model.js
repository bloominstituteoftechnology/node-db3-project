const db = require('../../data/db-config')

function find() { 
  return db('schemes as sch')
.leftJoin('steps as st','sch.sheme_id', 'st.scheme_id')
.select('sch.*')
.count('st.step_id as number_of_steps')
.groupBy('sch.scheme_id')
}

function findById(scheme_id) { 
  return db("schemes as sch")
    .leftJoin("steps as st", "st.scheme_id", "sch.scheme_id")
    .select("sch.scheme_name", "st.step_id", "st.step_number", "st.instructions", "sch.scheme_id")
    .where("sch.scheme_id", scheme_id)
    .orderBy("st.step_number", "asc")
}

function findSteps(scheme_id) { 
  return db("steps as st")
  .join("schemes as sch", "sch.scheme_id", "st.scheme_id")
  .select("st.step_id", "st.step_number", "st.instructions", "sch.scheme_name")
  .where("st.scheme_id", scheme_id)
  .orderBy("st.step_number", "asc")
}

function add(scheme) { 
  return db('schemes').insert(scheme)
  .then(([scheme_id]) => {
    return db('schemes').where('scheme_id', scheme_id).first()
})}

function addStep(scheme_id, steps) { 
  return db('steps').insert({
    ...steps,
    scheme_id
  })
  .then(() => {
    return db('steps as st')
    .join('schemes as sch', 'sch.scheme_id', 'st.scheme_id')
    .select('step_id', 'step_number', 'instructions', 'scheme_name')
    .orderBy('step_number')
    .where('sch.scheme-id', scheme_id)
})}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
}