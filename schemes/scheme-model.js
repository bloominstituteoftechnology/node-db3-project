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
  return db('schemes').where({ id });
}

function findSteps(id){
  return db('steps as st')
    .innerJoin('schemes as sc', 'st.scheme_id', '=', 'sc.id')
    .select('sc.id', 'sc.scheme_name', 'st.step_number', 'st.instructions')
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