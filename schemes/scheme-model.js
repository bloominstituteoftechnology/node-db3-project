const db = require('../data/db-config')

module.exports = {
  find,
  findById,
  findSteps,
  add,
  
  update,
  remove

}

function find() {
  return db("schemes")
}

function findById(id) {
  return db("schemes") 
    .where({id})
    .first()
}


function findSteps(id) {
  return db('steps')
  .join("schemes", "schemes.id", "=", "steps.scheme_id")
  .select('schemes.scheme_name', 'steps.step_number', 'steps.instructions')
  .where({scheme_id: id})
}

// function add(schemes) {
//   turn db('schemes')
//     .insert(schemes)

// }

async function add(schemes) {
   
  const dog =  await db('schemes')
    .insert(schemes)

  return db("schemes")
    .where({ dog })
    .first() 
}

function update(changes, id) {
  return db('schemes')
  .update(changes)
  .where({id})
}

// function addStep(stepData, id) {
//   return db('steps')
//   .update(stepData)
//   .where({scheme_id: id})
// }

function remove(id) {
  return db('schemes')
  .where({id})
  .delete()
}



