const db = require ('../data/db-config.js')

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
    return db('schemes')
    .where({ id })
    .first();
}

function findSteps(id) {
    return db('steps')
    .where({'steps.scheme_id': id})
    .select(
        'steps.id',
        'schemes.scheme_name',
        'steps.step_number',
        "steps.instructions"
    )
    .join('schemes', 'schemes.id', 'steps.scheme_id')
};


function add(schemeData) {
    return db('schemes').insert(schemeData)
}

function update(changes, id) { 
    return db('schemes') 
        .where({id: id}) 
        .update(changes, id) 
} 






function remove(id) {
    return db('schemes')
    .where({id})
    .del()
}

function addStep(step, scheme_id) {
    newStep = {...step, scheme_id: scheme_id}
    return db('steps').insert(newStep)
}