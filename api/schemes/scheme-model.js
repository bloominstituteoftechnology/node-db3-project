const db = require('../../data/db-config')

async function find(){
 const rows = await db('schemes as sc')
 .select('sc.*')
 .leftJoin('steps as st', 'sc.scheme_id', 'st.scheme_id')
 .groupBy('sc.scheme_id')
 .orderBy('sc.scheme_id')
 .count('st.step_id as number_of_steps')
 return rows
}

async function findById(scheme_id){ 
 const rows = await db('schemes as sc')
 .leftJoin('steps as st', 'sc.scheme_id', 'st.scheme_id')
 .where('sc.scheme_id', scheme_id)
 .select('st.*', 'sc.scheme_name', 'sc.scheme_id')
 .orderBy('st.step_number')

 if(!rows[0]){
   return null
 }else{
   return{
     scheme_id: rows[0].scheme_id,
     scheme_name: rows[0].scheme_name,
     steps: rows[0].step_id
     ? rows.map((row) => {
       return{
         step_id: row.step_id,
         step_number: row.step_number,
         instructions: row.instructions
       }
     })
     :[]
   }
 }
}

async function findSteps(scheme_id){
 const rows = await db('schemes as sc')
 .join('steps as st', 'sc.scheme_id', 'st.scheme_id')
 .select('st.step_id', 'st.step.number', 'instructions', 'sc.scheme_name')
 .where('sc.scheme_id', scheme_id)
 .orderBy('step_number')
 return rows
}

async function add(scheme){
 return db('schemes').insert(scheme)
 .then(([scheme_id]) => {
   return db('schemes').where('scheme_id', scheme_id).first()
 })
}

function addStep(scheme_id, step){
 return db('steps').insert({...step, scheme_id})
 .then(() => {
   return db('steps as st')
   .join('schemes as sc', 'sc.scheme_id', 'st.scheme_id')
   .select('step_id', 'step_number', 'instructions', 'scheme_name')
   .orderBy('step_number')
   .where('sc.scheme_id', scheme_id)
 })
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
}
