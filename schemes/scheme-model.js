const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  find,
  findById,
  findSteps,
  add,
 // addStep,
  update,
  remove,
};

function find() {
    return db('Schemes');
  }
  
  function findById(id) {
    return db('Schemes')
      .where({ id: Number(id) })
      .first();
  }

  function add(Schemes) {
    return db('Schemes')
      .insert(Schemes)
      .then(ids => ({ id: ids[0] }));
  }

//   function addStep(step, id) {
//     return db('steps')
//         .insert(step, id)
//         .then(([scheme_id]) => {
//             return findSteps(scheme_id)   
//         })
//   }

  function findSteps(id) {
      return db('steps')
        .select('steps.id', 'steps.step_number', 'steps.instructions', 'scheme_name')
        .join('schemes', 'schemes.id', 'scheme_id' )
        .where({ scheme_id: id })
  }

  function update(changes, id) {
    return db('Schemes')
      .where('id', Number(id))
      .update(changes);
  }
  
  function remove(id) {
    return db('Schemes')
      .where('id', Number(id))
      .del();
  }
