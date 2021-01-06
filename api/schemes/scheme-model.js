const db = require('../data/db-config')
 
function find() {
    return db("schemes")
}

function findById(id){
    return db("schemes").where({id}).first();
}

 function findSteps(id){
    return db("steps").where({scheme_id: id})
}

 function addStep(step){
    return db("steps")
    .insert(step, "id")
    .then(ids=>{
        return ids;
    })
}

 function add(scheme){
    return db("schemes")
    .insert(scheme, "id")
    .then(ids=>{
        return findById(ids[0])
    })
}

 function update(changes, id){
    return db("schemes").where({id}).update(changes);

 }

 function remove(id){
    return db("schemes").where({id}).del();
} 


module.exports = {
    find,
    findById,
    findSteps,
    addStep,
    add,
    update,
    remove
}