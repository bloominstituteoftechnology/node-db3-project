const db = require('../data/db-config');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  findStepById,
  addStep,
  update,
  remove
};

function find() {
  return db('schemes');
}

function findById(id) {
  return db('schemes')
    .where({ id })
    .first();
}

function findSteps(scheme_id) {
  return db('steps as st')
    .join('schemes as sc', 'st.step_number', 'sc.id')
    .select(
      'st.id',
      'st.step_number',
      'sc.id as scheme_id',
      'sc.scheme_name as scheme',
      'st.instructions'
    )
    .where({ scheme_id });
}

function findStepById(id) {
  return db('steps')
    .where({ id })
    .first();
}

async function add(scheme) {
  const [id] = await db('schemes').insert(scheme);
  return findById(id);
}

async function addStep(step) {
  const [id] = await db('steps').insert(step);
  return findStepById(id);
}

async function update(changes, id) {
  await db('schemes')
    .where({ id })
    .update(changes);
  return findById(id);
}

function remove(id) {
  return db('schemes')
    .where({ id })
    .del();
}
