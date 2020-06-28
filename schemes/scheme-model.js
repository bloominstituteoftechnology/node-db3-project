const db = require('../data/dbConfig.js');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  update,
  remove,
};

function find() {
  return db('schemes');
}

function findById(id) {
  return db('schemes')
    .where({ id })
    .first()
    .then(scheme=>{
      if(!scheme){
        return null;
      } else {
        return scheme;
      }
    });
}

function findStepById(id) {
  return db('steps')
    .where({ id })
    .first()
}

function findSteps(id){
  return db('steps')
    .join('schemes', 'schemes.id', 'steps.scheme_id')
    .where( 'schemes.id', id)
    .orderBy('steps.step_number')
    .select('steps.id','schemes.scheme_name','steps.step_number','steps.instructions')
}

function add(scheme) {
  return db('schemes')
    .insert(scheme)
    .then(ids => {
      return findById(ids[0]);
    });
}

function addStep(step, id){
  let stepData = step;
  stepData.scheme_id = Number(id);
  return db('steps')
    .insert(stepData)
    .then(s=>{
      return findStepById(s[0]);
    });
}

function update(changes, id) {
  return db('schemes')
    .where({ id })
    .update(changes)
    .then( ()=>{
      return findById(id);
    });
}

function remove(id) {
  let scheme = findById(id);
  return db('schemes')
    .where('id', id)
    .del()
    .then(res=>{
      if(res){
        return scheme;
      } else{
        return null;
      }
    });
}
