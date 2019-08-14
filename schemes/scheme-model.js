const db = require('../data/db-config')


module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove

}

function find(){
    return db('schemes')
}

function findById(id){
    return db('schemes')
    .where({id})
    .first();
}

function findSteps(scheme_id){
    return db('steps as s')
    .join('schemes as sc', 'sc.id', 's.scheme_id')
    .select('sc.scheme_name', 's.step_number','s.instructions')
    .where({scheme_id})
    first();
}

async function add (scheme){
    const [id]= await db('schemes').insert(scheme);
    return findById(id)
}

async function update(changes, id){
    await db('schemes')
    .where({id})
    .update(changes);

    return findById(id)
}

function remove(id) {
    // returns removed count
    return db('schemes')
      .where({ id })
      .del();
  }

  //stretch

  async function addStep(step, scheme_id){
      const newStep = await db('steps').insert(step);
     return findById(id)
  }