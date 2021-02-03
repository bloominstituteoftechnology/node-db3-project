// scheme-model

const db = require('../../data/db-config');

module.exports = {
    find,
    findById,
    findStepsBySchemeId,
    createScheme,
    updateScheme,
    deleteScheme
}

async function find(){
    return await db('schemes');
}

async function findById(id){
    return await db('schemes').where({ id })
}

async function findStepsBySchemeId(id){
    return await db('schemes').join('steps',
    'schemes.id','steps.scheme_id').select('steps.id','schemes.name','steps.step_number','steps.instructions').where({ scheme_id:id })
}

async function createScheme(data){
    return await db('schemes').insert(data);
}

async function updateScheme(id,changes){
    return await db('schemes').where({id}).update(changes);
}

async function deleteScheme(id){
    return await db('schemes').where({id}).del();
}