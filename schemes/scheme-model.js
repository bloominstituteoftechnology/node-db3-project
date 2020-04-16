

module.exports ={
    find,
    findById,
    findSteps,
    add,
    update,
    remove

};

const db = require('../data/db-config');

function find() {
    return db('schemes');
};
function findById(id){
    return db ('schemes')
    .where({id})
    .first();
};
function findSteps(id){
    return db('steps as st' )
    .join('schemes as sc', 'sc.id', 'st.scheme_id')
    .select('st.id', 'sc.scheme_name', 'st.instructions')
    .where({scheme_id: id});
};
function add (dataToInsert){
    return db('schemes').insert(dataToInsert);
};
function update(change, id){
    return db('schemes').where({id}).update(change);
};

function remove(id){
    return db('schemes')
    .where({id}).del();
};

