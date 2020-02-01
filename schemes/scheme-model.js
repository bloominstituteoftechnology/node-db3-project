const db = require("../utils/schemesDb.js");

exports.find = () => {
  return db("schemes");
};

exports.findById = id => {
  return db("schemes")
    .where({ id }) //searching by id
    .first(); //first data that matches
};

exports.add = user => {
  db("schemes")
    .insert(user)
    .then(ids => {
      return findById(ids[0]);
    });
};

exports.findSteps = id => {};

exports.update = (changes, id) => {};

exports.remove = id => {};
