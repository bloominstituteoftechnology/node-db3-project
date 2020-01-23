const db = require("../data/db-config.js");

module.exports ={
    find, 
    findById,
    findSteps,
    add,
    update,
    remove,
};

function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes').where({ id });
    //how to return null when invalid id
}

function findSteps(id) {
    return db('steps as s')
        .join('schemes as ss', 'ss.id', 's.scheme_id')
        .where('s.scheme_id', id)
        .select('*');
}

function add(scheme) {
    return db('schemes')
        .insert(scheme)
        .then(([id]) => {
            return findById(id).first();
        })
}



function update(id, changes) {
    return db('schemes')
        .where( id )
        .update(changes)
        .then(scheme => {
            return findById(id).first();
        })
}

function remove(id) {
    return db('schemes')
        .where({ id })
        .del()
        .then(() => {
            return id;
        })
}