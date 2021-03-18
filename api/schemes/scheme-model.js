const db = require('../../data/db-config')

const find = () => { 
  return db('schemes')
}

const findById = (id) => { 
  try {
    return db('schemes').where('id', id)
  } catch (e) {Promise.resolve(null)}
}

const findSteps = (id) => { 
  return db('schemes as s')
    .join('steps as st', 'st.scheme_id', 's.id')
    .where('s.id', id)
    .select('st.id', 's.scheme_name', 'st.step_number', 'st.instructions')
}

const add = (scheme) => { 
  return db('schemes as s')
    .insert(scheme)
    .then(([id]) => {return db('schemes as s').where('s.id', id)})
}

const update = (changes, id) => {
  return db('schemes as s')
    .where('s.id', id)
    .update(changes)
    .then(() => {return db('schemes as s')})
}

const remove = (id) => {
  return db ('schemes as s').where('s.id', id).del()
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
}
