const db = require('../data/db-config.js');

module.exports = {
    find,
    add,
    findById,
    findSteps,
    remove,
    update,
    addStep
};

function find() {
    return db('schemes')
};

function findById(id) {
    return db('schemes')
      .where({ id })
      .first();
};

function findSteps(scheme_id) {
    return db('steps')
        .join('schemes', 'schemes.id', 'steps.scheme_id')
        .select('steps.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
        .where({ scheme_id })
}

function findStepsById(id) {
    return db('steps')
        .where({id})
        .first()
}

function add(scheme) {
    return db('schemes')
      .insert(scheme)
      .then(ids => {
        return findById(ids[0]);
      });
};


function addStep(step, scheme_id) {
    return db('steps')
        .insert(step, scheme_id)
        .then(ids => {
            return findStepsById(ids).first()
        })
}


function remove(id) {
    return db('schemes')
      .where('id', id)
      .del();
  }

function update(changes, id) {
    return db('schemes')
      .where({ id })
      .update(changes)
}