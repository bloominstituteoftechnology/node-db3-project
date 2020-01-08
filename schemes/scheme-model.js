const db = require("../data/db-config")

function find() {
    return db("schemes")
}

function findById(id) {
    return db("schemes").where({id}).first()
}

function findSteps(schemeId) {
    return db("steps")
        .join("schemes", "schemes.id", "steps.scheme_id")
        .where({scheme_id: schemeId})
        .select("schemes.scheme_name", "steps.step_number", "steps.instructions")
        .orderBy("steps.step_number")
}

function add(data) {
    return db("schemes").insert(data)
}

function update(changes, id) {
    return db("schemes")
        .where({id})
        .update(changes)
        .then((res) => {
            return findById(id)
        })
}

function remove(id) {
    return db("schemes")
        .where({id})
        .del()
}


module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
}