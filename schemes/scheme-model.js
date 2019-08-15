const knex = require('knex');

const config = require('../knexfile.js');

const db = knex(config.development)

module.exports= {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
}

function find(){
  return db('schemes');
}

function findById(id){
  return db('schemes')
    .where({ id })
    .first()
}

function findSteps(id){
  return db('schemes as sc')
    .innerJoin('steps as st', 'st.scheme_id', '=', 'sc.id')
    .select('st.id', 'st.step_number', 'st.instructions','sc.id')
    .orderBy('st.step_number')
    .where({ scheme_id: id})
}

function add(scheme){
  return db('schemes').insert(scheme);
}

function update(changes, id){
  return db('schemes')
    .where({ id })
    .update(changes);
}

function remove(id){
  return db('schemes')
    .where({ id })
    .del();
}