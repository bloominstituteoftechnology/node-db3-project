const db = require("../data/dbConfig")

module.exports = {
    find,
    findAllSteps,
    findById,
    findSteps,
    add,
    addStep,
    update,
    remove,
}

//✅
function find(){
    return db("schemes")
}

//✅
function findAllSteps(){
    return db("steps")
}

//✅
function findById(id){
    return db("schemes")
        .where({id})
        .first()
}

function findSteps(id){
    return db("steps")
        .where({id})
        .first()
}

//✅
function add(payload){
    return db("schemes")
        .insert(payload, "id")
        .then((schema_id) => {
            const [id] = schema_id
            return findById(id)
        })
}


function addStep(){}

// -   `update(changes, id)`:
//     -   Expects a changes object and an `id`.
//     -   Updates the scheme with the given id.
//     -   Resolves to the newly updated scheme object.

function update(payload, id){
    return db("schemes")
        .update(payload)
        .where({id})
        .then(() => {
            return findById(id)
        })
        
}

//✅
function remove(id){
    return db("schemes")
        .where({id})
        .del()
}

