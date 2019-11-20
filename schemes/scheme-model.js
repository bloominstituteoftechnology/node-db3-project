const db = require('../data/db-config.js');

function find() {
    return db('schemes');
};

function findById(id) {
    return db('schemes').where({ id }).first();
};

function findSteps(id) {
    return db('steps')
           .join('schemes', 'schemes.id', 's.scheme_id')
           .select('steps.id', 'steps.step_number', 'steps.instructions')
           .where({ scheme_id: id })
           .orderBy('s.step_number');
};

module.exports = {
    find,
    findById,
    findSteps
}