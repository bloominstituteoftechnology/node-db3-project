// scheme-model

const db = require('../../data/db-config');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

async function find(){
    return await db('schemes');
}

async function findById(id){
    return await db('schemes').where({ id })
}

async function findSteps(id){
    return await db('schemes as s')
        .join('steps as st','st.scheme_id','=','s.id')
        .select('st.id','s.scheme_name','st.step_number','st.instructions')
        .where({scheme_id:id})
    
}

async function add(data){
    return await db('schemes').insert(data);
}

async function update(id,changes){
    return await db('schemes').where({id}).update(changes);
}

async function remove(id){
    return await db('schemes').where({id}).del();
}