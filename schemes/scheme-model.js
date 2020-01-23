const db = require('../data/db-config');

module.exports = {
    list,
    findById,
    findSteps,
    add,
    update,
    remove

};

function list(){
    return db('schemes');


}

function findById(userId){
    return db("schemes")
    .where({id : userId})
    .first();
}

function findSteps(userId){
    return db("steps")
    .join("schemes" , "schemes.id", "steps.scheme_id")
    .where("schemes.id", userId)
    .select("steps.id", "schemes.scheme_name", "steps.step_number", "steps.instructions ")
}

function add(steps){
    return db("schemes")
    .insert(steps)
}
function update(changes, userId){
return db("schemes")
.update(changes)
.where({id : userId});
}

function remove(userId){
    return db("schemes")
    .where({id : userId})
    .del();
}