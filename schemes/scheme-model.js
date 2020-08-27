const db = require("../data/config")

function find(){
    return db("schemes")
}

function findById(id){
    return db("schemes")
      .where("id", id)
      .first()
}

function findSteps(id){
    return db ("schemes as sc")
    .where("sc.id", id)
    .join("steps as sp" , "sc.id", "sp.scheme_id")
    .select('sc.id', 'sc.scheme_name', 'sp.step_number', 'sp.instructions')

}

function add(scheme){
    return db('schemes')
    .insert(scheme)
}

function update(changes, id){
    return db("schemes")
    .where("id", id)
    .update(changes)
}

function remove(id){
    return db("schemes")
    .where("id", id)
    .del()
}

module.exports ={
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}