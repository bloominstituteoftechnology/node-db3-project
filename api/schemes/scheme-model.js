const db = require("../data/config")

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
}

//  `find()`:
function find(){
    return db("schemes")
}

//`findById(id)`:
function findById(id){
    return db("schemes")
        .where({id})
        .first()
}
//`findSteps(id)`
function findSteps(id){
    return db ("schemes as sc")
    .where("sc.id", id)
    .join("steps as sp" , "sc.id", "sp.scheme_id")
    .select('sc.id', 'sc.scheme_name', 'sp.step_number', 'sp.instructions')
}

`add(scheme)`
function add(payload){
    return db("schemes")
        .insert(payload, "id")
        .then((schema_id) => {
            const [id] = schema_id
           return findById(id)
       })
}

//`update(changes, id)`
function update(payload, id){
    return db("schemes")
        .update(payload)
        .where({id})
        .then(() => {
            return findById(id)
       })
}
//`remove(id)`
function remove(id){
    return db("schemes")
        .where({id})
        .del()
}