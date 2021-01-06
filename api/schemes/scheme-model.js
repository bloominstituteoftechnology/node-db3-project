// scheme-model
const db= require("../../data/db-config")

function find() {
    return db("schemes")
    .select("*");
}

function findById(id) {
    return db("schemes")
    .select("*")
    .where("id",id);
}

function findSteps(id) {
    return db("schemes")
    .innerJoin("steps", "steps.scheme_id", "schemes.id")
    .where("schemes.id",id)
    .select("steps.id", "schemes.scheme_name", "steps.step_number", "steps.instructions")
    .orderBy("steps.step_number");
}

function add(scheme) {
    return db("schemes")
        .insert(scheme)
        .into("schemes")
}

function update(changes, id) {
    return db("schemes")
    .where("id",id).update(changes)

}

function remove(id) {
    return db("schemes")
    .where("id",id).del()
}

module.exports={
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}