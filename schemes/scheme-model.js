const db = require('../data/dbConfig');

module.exports = {
    find,
    findById,
    findSteps,
    // add,
    // update,
    // remove,
    // scheme
}

function find(){
    return db('schemes');
}

function findById(id){
    return db('schemes')
        .where({id})
        .first();
}

function findSteps(scheme_id){
    return db('steps as st')
    .join('schemes as sc', 'sc.id', 'st.scheme_id')
    .select('st.id', 'st.step_number', 'sc.scheme_name')
    .where('st.scheme_id', scheme_id)
    .orderBy('st.step_number');
}