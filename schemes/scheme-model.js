const db = require('../data/db-config');
// Todays tasks:
// use w3 schools to write sql in queries.md
// write the db helper methods for the schemes resource in ./schemes/scheme-model.js

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
  //--- stretch ---
  removeStep
};

// x Calling find returns a promise that resolves to an array of all schemes in the database.
// x No steps are included.
function find() {
  return db('schemes');
}

// x Expects a scheme id as its only parameter.
// x Resolve to a single scheme object.
// x On an invalid id, resolves to null.
function findById(id) {
  return db('schemes')
    .where({ id })
    .first();
}

// x Expects a scheme id.
// - Resolves to an array of all correctly ordered step for the given scheme: 
//   [ { id: 17, scheme_name: 'Find the Holy Grail', step_number: 1, instructions: 'quest'}, 
//   { id: 18, scheme_name: 'Find the Holy Grail', step_number: 2, instructions: '...and quest'}, etc. ].
// - This array should include the scheme_name not the scheme_id.
function findSteps(id) {
    return db('schemes')
    .select('schemes.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')    
    .join('steps', 'schemes.id','=', 'steps.schemes.id')
    .where({ id });
}
  
// - Expects a scheme object.
// - Inserts scheme into the database.
// - Resolves to the newly inserted scheme, including id.
function add(scheme) {
    return db('schemes')
      .insert(scheme, 'id')
      .then(([id]) => {
        return findById(id);
      });
}

// - Expects a changes object and an id.
// - Updates the scheme with the given id.
// - Resolves to the newly updated scheme object.
function update(changes, id) {
    return db('schemes')
        .where({id: id})
        .update(changes, id)
}

// - Removes the scheme object with the provided id.
// - Resolves to the removed scheme
// - Resolves to null on an invalid id.
//   (Hint: Only worry about removing the scheme. The database is configured to automatically remove all associated steps.)
function remove(scheme) {
    return db('schemes')
        .where({ id: scheme })
        .delete(scheme, 'id')
}

//--- stretch ---

function removeStep(schemeId, stepNumber) {
    return db('steps')
    .where({scheme_id: schemeId})
    .andWhere({step_number: stepNumber})
    .delete()
}