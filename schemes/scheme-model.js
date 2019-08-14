const db = require("../db-config");

module.exports = {
  find,
  findById
  //   findSteps,
  //   add,
  //   update,
  //   remove
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({ id: id });
}
