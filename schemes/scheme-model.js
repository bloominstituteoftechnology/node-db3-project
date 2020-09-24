const db = require("../data/db-config.js");

function find() {
    return db("schemes");
}

function findById(id) {
    return db("schemes")
        .where({ id })
        .first();
}

function findSteps(scheme_id) {
    return db("steps as p")
        .join("schemes as s", "s.id", "p.scheme_id")
        .select("p.id", "s.scheme_name", "p.instructions")
        .where({ scheme_id: id });
}

function add(scheme){
    return db("schemes")
        .insert(scheme);
}

function update(changes, id) {
    return db("schemes")
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db("schemes")
        .where({ id })
        .del();
}

module.exports = {
    find,
    findById,
    findSteps
    add,
    update,
    remove
};