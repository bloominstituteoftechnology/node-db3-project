const db = require('../data/dbConfig')


module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
    addStep
}

function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes').where({id}).first()
}

function findSteps(id) {
    return db('steps')
        .where("scheme_id", id)
}

function addStep(data,id){
    return db('steps')
        .insert(data)
        .where("scheme_id", id)
}

function add(scheme){
    return db('schemes')
        .insert(scheme)
}

function update(changes,id){
    return db('schemes').where({id}).update(changes)
}

function remove(id){
    return db('schemes').where({id}).del()
}