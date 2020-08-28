const db = require("../data/config")

function find(){
    return db("schemes as s")
        .select("*")
}
function findById(id){
    return db("schemes as s")
        .innerJoin("steps as st", "s.id", "st.scheme_Id")
        .select("s.id","s.scheme_name")
        .where("s.id", id)
        .first()
}

function findSteps(id){
    return db("schemes as s")
        .innerJoin("steps as st", "s.id", "st.scheme_Id")
        .where("s.id",id)
        .select("s.id", "s.scheme_name","st.step_number", "st.instructions")
}

function add(scheme){
    return db("schemes as s")
    .insert(scheme)
}

function update(changes, id){
    return db("schemes as s")
    .where("s.id",id)
    .update(changes)
}

function remove(id){
    return db("schemes as s")
    .where("s.id", id)
    .del()
}


module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}