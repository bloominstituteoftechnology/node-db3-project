const db = require("../data/dbConfig");

const find = () => {
    return db("schemes");
}

const findById = id => {
    return db("schemes").where({ id }).first();
}

const findSteps = id => {
    return db("steps as st")
        .join("schemes as sch", "sch.id", "st.scheme_id")
        .select("st.id", "st.step_number", "st.instructions", "sch.scheme_name")
        .where("st.scheme_id", "=", Number(id))
        .orderBy("st.step_number");
}

const add = async scheme => {
    const [id] = await db("schemes")
                    .insert(scheme, "id")
    return findById(id)
}

const update = async (changes, id) => {
    const success = await db("schemes")
                            .where({ id })
                            .update(changes);
    if (success) return findById(id)
    else throw "We could not update!"
}

const remove = async id => {
    const toBeDeleted = await findById(id);
    if (!toBeDeleted) return null
    await db("schemes")
            .where({ id })
            .del();
    return toBeDeleted;
}

const findStepById = id => {
    return db("steps").where({ id }).first();
}

const addStep = async (step, scheme_id) => {
    const newStep = {
        scheme_id,
        step_number: step.step_number,
        instructions: step.instructions
    }
    const [id] = await db("steps").insert(newStep, "id")
    return findStepById;
}

module.exports = {
    find, 
    findById,
    findSteps,
    add,
    update,
    remove,
    addStep,
    findStepById
}