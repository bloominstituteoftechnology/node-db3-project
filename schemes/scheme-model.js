const db = require('../data/schemes-dbconfig');

const find = () => {
  return db('schemes');
}

module.exports = {
  find,
  // findById,
  // findSteps,
  // add,
  // addStep,
  // update,
  // remove
}