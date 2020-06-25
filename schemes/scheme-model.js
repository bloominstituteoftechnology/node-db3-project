
const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    add,
    findSteps,
    update,
    remove
}

function find() {
    return db('schemes');
}

//works on Postman 

function findById(id) {
    return db('schemes')
    .where({id})
    .first();
}

//works on Postman for get

function add(schemeData) {
    return db('schemes').insert(schemeData);
}

//works on Postman

function findSteps(id) {
    return db('steps as s')
    .join('schemes as k', 'k.id', 's.scheme_id')
    .select('s.id', 'k.scheme_name', 's.step_number', 's.instructions')
    .orderBy('s.step_number')
    .where({ scheme_id: id })
}

//works on Postman


function update(changes, id) {
    return db("schemes")
    .where({id})
    .update(changes)
    .then((count) => {
        return findById(id);
    });
}

//works on Postman

function remove(id) {
    return db('schemes')
    .where({id})
    .del()
}
//works on Postman