const db = require('../data/dbConfig');

module.exports = {
    find, 
    findById, 
    findSteps, 
    add,
    update, 
    remove
}
// this function works 
function find(){
    return db('schemes')
}

// this function works
function findById(id){
    return db('schemes').where({id}).first()
}


// this function works
function findSteps(scheme_id){
    return db()
    .select('*', 'scheme_name')
    .from('steps as st')
    .where({ scheme_id })
    .join('schemes as sc', 'st.scheme_id', 'sc.id')
    .orderBy('st.step_number');
}

// this end function works 

function add(scheme){
  return db('schemes').insert(scheme)
    .then((ids) => {
        return findById(ids[0]);
    });
}

// this function works 
function update(changes, id){
    return db('schemes').where({id}).update(changes)
}


// this function works 
function remove(id){
    return db('schemes').where({id}).del()
}