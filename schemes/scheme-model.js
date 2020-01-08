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
    .select()
}

function findById(id) {
    return db("schemes")
    .where({ id })
    .first()
}

function findSteps(id) {
    return db("steps")
    .where({ id })
    .first()
}

async function add(schemeData) {
    const [id] = await db("schemes")
    .insert(schemeData)
    return db("schemes")
    .where({ id })
    .first()
}

function update(changes, id) {
    return db("schemes")
    .where({ id })
    .update(changes)
}

function remove(id) {   
    return db("schemes")
    .where({ id })
    .del()
}

// setup to separately test these helpers.