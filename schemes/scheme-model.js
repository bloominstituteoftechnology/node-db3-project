const db = require("../data/seeds/db-config")

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
    return db("scheme")
    .where({ id })
    .first()
}

function findSteps(id) {
    return db("steps")
    .where({ id })
    .first()
}

async function add(scheme) {
    const [id] = await db("schemeData")
    .insert(scheme)
    return db("schemeData")
    .where({ id })
    .first()
}

async function update(changes, id) {
    return db("scheme")
    .where({ id })
    .update(changes)
}

function remove(id) {   
    return db("scheme")
    .where({ id })
    .del()
}

// setup to separately test these helpers.