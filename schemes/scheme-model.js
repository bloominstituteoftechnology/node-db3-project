const db = require("../data/dbConfig")

module.exports = {
find,
findById,
findSteps,
add,
update,
remove
}

function find() {
    return db("schemes");
}

function findById(id) {
    return db("schemes")
    .where("id", id)
    .first()
}

function findSteps(id) {
    return db('steps')
      .where('steps.scheme_id', id)
      .join('schemes', 'steps.scheme_id', 'schemes.id')
      .select('steps.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
  }

function add(scheme) {
    return db("schemes").insert(scheme)
    .then(scheme => {
        return findById(scheme[0])
    })
}

function update(changes, id) {
    return db("schemes")
    .where("id", id)
    .first()
    .update(changes)
    .then(() => {
        findById(id)
    })
}

// function remove(id) {
//     return db("schemes").where("scheme.id", id).first().del()
//     .then(scheme => {
//         scheme
//     })
// }

function remove(id) {
    return findById(id)
      .then(scheme => {
        return db("schemes").where({id}).first().del()
          .then(scheme => {
            return scheme
        })
    })
}