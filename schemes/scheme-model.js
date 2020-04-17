const db = require("../data/db-config");

function find(){
    return db("schemes")
}

function findById(id){
    return db("schemes")
    .where({id})
    .first();
}
function findSteps(id) {
    return db('steps as s')
        .join('schemes as c', 's.scheme_id', 'c.id')
        .select('c.id', 'c.scheme_name', 's.step_number', 's.instructions')
        .orderBy('s.step_number')
        .where('s.scheme_id', id);

// function findSteps(id){
//     return db ('steps as s')
//     .join('schemes as sc', 's.scheme_id', 'sc.id')
//     .select('s.id', "sc.scheme_name", 's.step_number', 's.instruction')
//     .where('s.id', id);  
// }
function add(scheme){
    return db("schemes")
    .insert(scheme);
};
function update(changes, id){
    return db('schemes')
    .update(changes)
    .where('schemes.id', id)
}
function remove (id){
    return db('schemes')
    .del()
    .where ('schemes.id', id)

}
module.exports ={
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}