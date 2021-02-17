const db = require('../../data/db-config')

module.exports ={
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find(){
    return db('schemes')
}

function findById(id){
    const schemaObject = db('schemes').where({id}).first()

    if (!schemaObject){
      return Promise.resolve(null)  
    } else{
        return schemaObject
    }
}

function findSteps(id){
    return db('schems as sc')
        .join('steps as st', 'sc.id', 'st.scheme_id')
        .select('sc.scheme_name', 'st.step_number', 'st.instructions')
        .where('sc.id', id)
}

function add(scheme){

}

function update(changes, id){

}

function remove(id){

}