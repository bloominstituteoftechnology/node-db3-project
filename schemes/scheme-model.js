const db = require('./dbConfig.js')

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    findSteps,
    addStep,
}

function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes').where({id}).first();
}
function findSteps(id){
    const steps =  db('steps')
    .join('schemes','schemes.id','steps.scheme_id')
    .select('steps.*').where('steps.scheme_id', id)
    // console.log("crap: ", steps)
   return steps;
   
}
function add(scheme){
    return db('schemes').insert(scheme, 'id').then(ids => findById(ids[0]))

}

function update(changes, id){
    return db('schemes').where({id}).update(changes).then(count => findById(id));
}

function remove(id) {
    
    return db('steps').where('id',Number(id)).del().then(count => ({id}))
}

function addStep(step, scheme_id) {
    
    const stepInfo = {...step, scheme_id: Number(scheme_id)}
    console.log(stepInfo)
    return db('steps').insert(stepInfo,'id')

}

