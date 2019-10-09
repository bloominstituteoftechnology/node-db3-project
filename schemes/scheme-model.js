const db = require ('../data/db-config.js')

module.exports = {
    find,
    findById,
    findSteps,
    // add,
    // update,
    // remove
}

function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes')
    .where({ id })
    .first();
}

function findSteps(id) {
    return db('steps')
    .where({'steps.scheme_id': id})
    .select(
        'steps.id',
        'schemes.scheme_name',
        'steps.step_number',
        "steps.instructions"
    )
    .join('schemes', 'schemes.id', 'steps.scheme_id')
};