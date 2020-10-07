const db = require ('../data/dbConfig')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find(){
    return db('schemes')
}

function findById(id){
    return db('schemes')
    .where({id: id})
    .first()
}

function findSteps(id){
    return db('steps')
    .select('steps.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
    .join('schemes', 'schemes.id', 'steps.scheme_id')
    .where({scheme_id: id})
    .orderBy('steps.step_number')
}

function add(scheme){
    return db('schemes')
    .insert(scheme)
}

function update(changes, id){
    return db ('schemes')
    .where({id: id})
    .update(changes)
    .then(() => {
        return findById(id)
    })
}

function remove(id){
    return db('schemes')
    .where({id: id})
    .del()
}