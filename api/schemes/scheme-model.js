// scheme-model
const db = require('../../data/db-config')



    function find(){
        return db('schemes')
    }
    function findById(id){
        return db('schemes')
        .where('schemes.id', id)
    }
    function findSteps(id){
        // SELECT 
        // s.scheme_name,
        // st.step_number,
        // st.instructions
        // FROM steps st
        // JOIN schemes s
        // on s.id = st.scheme_id
        // WHERE st.scheme_id = 2;
        return db('schemes as sh')
        .join('steps as st', 'sh.id', 'st.scheme_id')
        .select('st.instructions', 'step_number')
        .where('sh.id', id)


    }
    function add(scheme){
       return db('schemes')
       .insert(scheme)
    }
    function addStep(step){
   

    }
    function update(changes, id){

        // UPDATE schemes
        // SET scheme_name = 'poo'
        // WHERE id = 1;
        return db('schemes as s')
        .where('s.id', id)
        .update('scheme_name', changes.scheme_name)
    }
    function remove(id){
        return db('schemes')
        .where('schemes.id', id)
        .del()


    }
module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}