const db = require("../data/dbConfig")

function find() {
    return db("schemes")
}

function findById(id) {
    return db("schemes")
        .where("schemes.id", id)
}

function findSteps(id) {
    return db("schemes")
        .join('steps', 'schemes.id', '=', 'steps.scheme_id')
        .where("schemes.id", id)
        .orderBy("steps.step_number")
}

function add(scheme) {
    return db("schemes")
        .insert(scheme)
}

function update(changes, id) {
    return db("schemes")
        .where("schemes.id", id)
        .update(changes)
}

function remove(id) {
    return db("schemes")
        .where("schemes.id", id)
        .del()
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}