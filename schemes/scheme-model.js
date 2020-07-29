const db = require('../data/db-config')

function findAll(table) {
    return db(table).select()
}

function findById(table, id) {
    return db(table).where({id}).first()
}

function findSteps(table1, table2, scheme_id) {
    return db(table1)
    .join(table2, `${table1}.id`, `${table2}.${scheme_id}`)
    .where({ scheme_id })
    .orderBy(`${table2}.step_number`)
    .select(`${table2}.id`, `${table1}.scheme_name`, `${table2}.step_number`, `${table2}.instructions`)
}

function add(table, scheme) {
    CONST [id] = db(table).insert(scheme)
    return db(table).where({id}).first()
}

function update(table, changes, id) {
    db(table).update(changes).where({ id })
    return findById(id)
}

function remove(table, id) {
    return db(table).where({ id }).del()
}

// Stretch
function addStep(table, step, scheme_id) {
    CONST [scheme_id] = db(table).insert(step)
    return db(table).where({scheme_id}).first()
}


module.exports = {
    findAll,
    findById,
    findSteps,
    add,
    update,
    remove,
    addStep
}