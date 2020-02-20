const db = require ("../data/db-config.js")

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find(){
    return db('schemes');
}

function findById(){
return db('schemes')
.where({id})
.first();
}

function findSteps(id){
    return db.select('steps.id', 'schemes.schemes_name','steps.step_number', 'steps.instructions')
    .from ('schemes')
    .join('steps', 'schemes.id', '=', 'steps.scheme_id')
}

function add(scheme){
    return db('schemes')
    .insert(scheme)
    .then(ids => {
        console.log(ids)
        console.log(ids[0])
        return findById(ids[0])
    })
}

function update(changes, id){
    return db('schemes')
    .where({id})
    .update(changes)
    .then(response => findById(id))
}

function remove(id){
    return db('schemes')
    .where({id})
    .del()
}