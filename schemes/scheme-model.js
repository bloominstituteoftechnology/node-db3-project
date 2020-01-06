const db = require("../db-config")

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find() {
    return db("schemes")
}


function findById(id) {
    return db("scheme").where({ id }).first()
}

function findSteps(id) {
    return db("steps").where({ id }).first()

}

function add(scheme) {
    return db("schemeData")

}

function update(changes, id) {
    return db("scheme").where({ id }).first()

}

function remove(id) {   
    return db("deleted").where({ id }).del()
}

// setup to separately test these helpers.