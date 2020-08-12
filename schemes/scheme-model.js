const db = require("../data/dbConfig.js");

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
};

function find() {
    return db("schemes");
}

function findById(id) {
    return db("schemes").where({ id }).first();
}

function findSteps(id) {
    return db("steps").where({ id }).first();
}

function add(schemeData) {
    return (
        db("schemes")
            .insert(schemeData)
            .returning("id")
            .then(ids => {
                const id = ids[0];
                return findById(id);
            })
    );
}

function update(id, changes) {
    return db("schemes")
        .where({ id })
        .update(changes)
        .then(() => {
            return findById(id);
        });
}

function remove(id) {
    return db("schemes").where({ id }).del();
}
