const db = require('../data/schemes-dbconfig');

const find = () => {
  return db('schemes');
}

const findById = (id) => {
  return db('schemes')
    .where({ id })
    .first()
}

const findSteps = (id) => {
  return db('steps')
    .where({ id })
}

const add = (obj) => {
  return db('schemes')
    .insert(obj)
    .then(([id]) => {
      return findById(id)
    });
}

const addStep = (obj) => {
  return db('steps')
    .insert(obj)
    .then(([id]) => {
      return findSteps(id)
    });
}

const update = (id, obj) => {
  return db('schemes')
    .where({ id })
    .update(obj)
    .then(newScheme => {
      if(newScheme === 1) {
        return findById(id);
      }
    });
}

const remove = (id) => {
  return db('schemes')
    .where({ id })
    .del()
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  update,
  remove
}