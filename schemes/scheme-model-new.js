const db = require("../data/dbConfig");

const find = () => {
    return db("schemes");
}

const findById = id => {
    return db("schemes").where({ id }).first();
}

const findByName = scheme_name => {
    return db("schemes").where({ scheme_name }).first();
}

const findSteps = id => {
    return db("steps as st")
        .join("schemes as sch", "sch.id", "st.scheme_id")
        .select("st.id", "st.step_number", "st.instructions", "sch.scheme_name")
        .where("st.scheme_id", "=", Number(id))
        .orderBy("st.step_number");
}

const add = scheme => db("schemes").insert(scheme, "id");

const update = (changes, id) => {
    return db("schemes")
            .where({ id })
            .update(changes);
}

const remove = id =>  db("schemes").where({ id }).del();

const findStepById = id => db("steps").where({ id }).first();

const addStep = newStep => db("steps").insert(newStep, "id");

module.exports = {
    find, 
    findById,
    findByName,
    findSteps,
    add,
    update,
    remove,
    addStep,
    findStepById
}