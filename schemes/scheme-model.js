const db = require('../data/db-config');


function find() {
    return db('Schemes');
  }

function findById(id) {
return db('Schemes').where({ id }).first();
}
/*Expects a scheme id as its only parameter.
Resolve to a single scheme object.
On an invalid id, resolves to null. */


function findSteps(id) {
    return db('Schemes as s')
        .join('Steps', 's.id', 'Steps.scheme_id')
        .select('*')
        .where({ scheme_id: id })
        .orderBy('scheme_id');
}
/*Expects a scheme id.
Resolves to an array of all correctly ordered step for the given scheme: [ { id: 17, scheme_name: 'Find the Holy Grail', step_number: 1, instructions: 'quest'}, { id: 18, scheme_name: 'Find the Holy Grail', step_number: 2, instructions: '...and quest'}, etc. ].
This array should include the scheme_name not the scheme_id. */


function add(scheme) {
  db('Schemes').insert(scheme)
    .then(ids => {
      return findById(ids[0]);
    });
  }
/* Expects a scheme object.
Inserts scheme into the database.
Resolves to the newly inserted scheme, including id. */



function update(changes, id) {
    return db('Schemes').where({ id }).update(changes);
}
/* Expects a changes object and an id.
Updates the scheme with the given id.
Resolves to the newly updated scheme object. */


function remove(id) {
        return db('Schemes').where({ id }).del();
    }

/* Removes the scheme object with the provided id.
Resolves to the removed scheme
Resolves to null on an invalid id.
(Hint: Only worry about removing the scheme. The database is configured to automatically remove all associated steps.) */

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
};