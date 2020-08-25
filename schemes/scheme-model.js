const db = require('../data/config')

function find() {
    return db('schemes')
        .select('scheme_name')
}

function findById(id) {
    return db('schemes')
        .select('scheme_name')
        .where('id', id)
}

function findSteps(id) {
    return db('schemes as sc')
        .innerJoin('steps as st', 'sc.id', 'st.scheme_id')
        .where('sc.id', id)
        .select('sc.id', 'sc.scheme_name', 'st.step_number', 'st.instructions')
}

function add(scheme) {
    return db('schemes')
        .insert(scheme)
}

function addStep(stepData, id) {
    return db('steps')
        .insert({...stepData, scheme_id: id})
}

function update(changes, id) {
    return db('schemes')
        .update(changes)
        .where('id', id)
}

function remove(id) {
    return db('schemes')
        .where('id', id)
        .del()
}

module.exports = {
    find, findById, findSteps, add, addStep, update, remove
}