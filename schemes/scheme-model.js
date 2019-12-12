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
    return db('schemes')
}

function findById(id) {
    return db('schemes')
    .where({id})
    .first() || null
}
// findSteps(id):
// Expects a scheme id.
// Resolves to an array of all correctly ordered step for the given scheme: [ { id: 17, scheme_name: 'Find the Holy Grail', step_number: 1, instructions: 'quest'}, { id: 18, scheme_name: 'Find the Holy Grail', step_number: 2, instructions: '...and quest'}, etc. ].
// This array should include the scheme_name not the scheme_id.

function findSteps(id){

    return db
        .select('steps.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
        .from ('schemes')
        .innerJoin('steps', 'schemes.Id', 'steps.scheme_id')
        .where({ 'schemes.id': id })
        .orderBy('steps.step_number')
}

function add(scheme) {
    return db("schemes")
      .insert(scheme, "id")
      .then(([id]) => {
        return findById(id);
      });
  }

function update (changes, id){
  return db("schemes")
  .where({id})
  .update(changes)
  .then(() => {
      return findById(id)
  })
}

function remove (id) {
    return db('schemes')
    .where({ id })
    .first()
    .then(scheme => {
        if(!scheme){
            return null
        }else{
            return db('schemes')
            .where({ id })
            .del()
            .then(() => {
                return scheme;
            })
        }
    })
}