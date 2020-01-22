const db = require("../data/dbConfig");

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
};

function find() {
    return db.select("*").from("schemes")
}

function findById(id) {
    return db('schemes')
    .where('id', id)
    .first();
}

function findSteps(id) {
    return db('steps')
    .join('schemes', 'schemes.id', 'steps.scheme_id')
    .select('steps.id', 'schemes.scheme_name', 'steps.instructions', 'steps.step_number')
    .where('scheme_id', id )
    .orderBy('steps.step_number', 'asc')
    
};

function add(newScheme){
    return db('schemes')
    .insert(newScheme)
    .then(ids => {
        const [id] = ids
        return findById(id)
    } )
    
}

function update(changes, id){
    return db('schemes')
    .where('id', id)
    .update(changes)
    .then(updated => {
        updated > 0 ? findById(id) : null
    })
}

function remove (id) {
   
    return db('schemes')
    .where('id', id)
    .del()
    
}