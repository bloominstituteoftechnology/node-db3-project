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
    return ('all wired up')
}

async function createScheme(data){
    return ('all wired up')
}

async function updateScheme(id,changes){
    return ('all wired up')
}

async function deleteScheme(id){
    return ('all wired up')
}