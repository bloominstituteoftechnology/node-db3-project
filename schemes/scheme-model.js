const db = require("../data/db-config")

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
    // select * fom users;
    return db('schemes');
    // return db('users'); // does the same thing
}

function findById(schemeId) {
    // select * from schemes where id = ?
    return db("schemes")
        .where({ id: schemeId })
        .first();
}
function findSteps(schemeId) {
    // select * from schemes where id = ?
    return db("schemes")
        .join('steps', 'steps.scheme_id', '=', 'schemes.id')
        .where('schemes.id', schemeId)
        .select('schemes.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
        .orderBy('steps.step_number')
}
function add(scheme) {
    return db("schemes")
        .insert(scheme)
        .then(([id]) => {
            return findById(id);
        });
}

function remove(id) {
    return db("schemes")
    .where('id', id)
    .del()
    .then(item => {
        return item
    })
}
function update(changes, id) {
    return db('schemes')
    .where('id', id)
    .update(changes)
}

function addStep(step, scheme_id) {
    return db('steps')
    .insert({ ...step, scheme_id })
    .then(arrId => {
        return db('steps')
        .where({ id: arrId[0] })
        .first()
        .then(newStep => newStep)
    })
}