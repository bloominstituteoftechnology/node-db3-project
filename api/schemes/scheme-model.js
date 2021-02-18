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
    return db('schemes as sc')
        .join('steps as st', 'sc.id', 'st.scheme_id')
        .select('sc.scheme_name', 'st.step_number', 'st.instructions')
        .where('sc.id', id)
}

function add(scheme){
    return db('schemes').insert(scheme)
    .then(([id]) =>{
        return db('schemes').where('id', id).first()
    })
}

function update(changes, id){
    const schemaObject = db('schemes').where({id}).first()

    if(!schemaObject){
      return Promise.resolve(null)  
    } else{
        return db('schemes').where('id', id).update(account)
    .then(([id]) =>{
        return db('schemes').where('id', accountId).first()
    })
    }
}

function remove(id){
    const schemaObject = db('schemes').where({id}).first()

    if(!schemaObject){
        return Promise.resolve(null)  
      } else{
          return db('schemes').where('id', id).del()
      }
}