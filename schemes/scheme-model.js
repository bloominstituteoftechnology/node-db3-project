const db = require("../data/config")

function findPostsByUserID(userID) {
    return db("post as p")
        .innerJoin("users as u", "u.id", "p.user_id")
        .where("p.user_id", userID)
        .select("p.id", "p.contents", "u.username")
}

function find(){
    return db("schemes")
        .select("id", "scheme_name")
}

function findById(id){
    return db("schemes")
        .select("id", "scheme_name")
        .where("id", id)
}

function findSteps(id){
    return db("schemes as s")
        .innerJoin("steps as p", "p.scheme_id", "s.id")
        .where("s.id", id)
        .select("s.id", "s.scheme_name","p.step_number", "p.instructions")
}

function add(scheme){
    return db("schemes")
        .insert(scheme)
        .then(id => findById(id))
}

function update(changes, id){
    return db("schemes")
        .where("id",id)
        .update(changes)
        .then(()=>findById(id))
}

function remove(id){
    return db("schemes")
        .delete()
        .where("id", id)
}

module.exports = {
    find, findById, findSteps, add, update, remove
}