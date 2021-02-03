// scheme-model
const db = require("../../data/db-config.js");

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
};

 function find() {
    return db('schemes');
}

 function findById(id) {
    return db('schemes').where({id}).first();
}

 function findSteps(id) {
    return db('posts as p')
    .join('schemes as s')
    .select('p.id', 's.schemes', 'p.contents')
    .where({schemes_id: id})
}

//review this findsteps function. need to see if schemes_id exists

 function add(scheme) {
    return db('schemes').insert(scheme)
}

 function update(id, changes) {
    return  db('schemes').update(changes).where({id})
}

 function remove(id) {
    return db('schemes').where({id}).del()
}