const db = require ('../data/dbConfig');

module.exports= {
    find,
    findById,
    findSteps, //(id)
    //add, //(scheme)
    //update, //(changes, id)
    //remove //(id)
};

function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes').where({ id }).first();
}

function findSteps(id) {
    return db('schemes').where({ id }).first();
}
//join