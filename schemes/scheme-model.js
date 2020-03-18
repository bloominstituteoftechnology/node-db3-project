const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
    addStep
}

function find(){
 return db('schemes');
}

function findById(id){
    return db('schemes')
    .where({ id })
    .first();
}

function findSteps(id){
    return db("steps")
    .select("steps.id", "schemes.scheme_name", "steps.step_number", "steps.instructions")
    .join("schemes", "steps.scheme_id", "schemes.id")
    .where("scheme_id", id);
}

function add(scheme){
    return db("schemes")
    .insert(scheme, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function update(changes, id){
    return db('schemes')
    .where({ id })
    .update(changes)
    .then(() =>{
        return findById(id)
    });
}

function remove(id){
    return db("schemes")
    .where("id", id)
    .del();
}

function addStep(step, id) {
    return db('steps')
      .insert({ ...step, scheme_id: id });
  };