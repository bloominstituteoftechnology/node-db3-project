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

//✅ -- Not sure What's suppose to happen based off of instructions.  But this works. 
function findSteps(id){
    return db("steps")
        .select("steps.id", "schemes.scheme_name", "steps.step_number", "steps.instructions" )
        .join("schemes")
        .orderBy("steps.step_number")
        .where("schemes.id", id)
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

//✅
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

