const db = require("../data/config")

function find() {
    return db("schemes");
}

function findById(id) {
    return db("schemes")
        .where({id})
        .first();
}

function findSteps(id) {
    return db("schemes as s")
        .innerJoin("steps as st", "s.id", "st.scheme_id")
        .where("st.scheme_id", id)
        .orderBy("st.step_number")
        .select("st.id", "s.scheme_name", "st.step_number", "st.instructions");
}

function add(scheme) {
    return db("schemes")
        .insert(scheme)
        .then(id => {
            return findById(id[0]);
        });
}

function update(changes, id) {
    return db("schemes")
        .where({id})
        .update(changes);
}

function remove(id) {
    return db("schemes")
        .where("id", id)
        .del();
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}