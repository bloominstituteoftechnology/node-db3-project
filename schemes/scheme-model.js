const { from } = require('../data/config');
const db = require('../data/config');




function find() {
    return db.select('*').from('schemes');
}

function findById(id) {
    return db.select('*').from("schemes").where('schemes.id', id);
}

function findSteps(id) {
    return db.select('steps').where({scheme_id: id});
}

function add(scheme) {
    return db.select('schemes').insert(scheme).then(ids => ({id: ids[0]}));
}

function addStep(step) {
    return db.select('steps').insert(step).then(ids => ({id: ids[0]}));
}

function update(changes, id){
    return db('schemes').where({id}).update(changes);
}

function remove(id) {
    return db('schemes')
    .where('id', Number(id))
    .del();
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    addStep,
    update,
    remove
};