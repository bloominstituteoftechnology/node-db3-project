const db = require("../data/db-config.js")

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find() {
    //
    return db("schemes as s")
    // .join("steps as st", "s.id", "st.scheme_id")
    .select("*")
    // .distinct();
    // s.id", "s.scheme_name
}

// "schemes.id", "schemes.scheme_name", "steps.instructions", 

function findById(id) {
    return db("schemes")
            .where({id: id})
            .first()
            
}

    function findSteps(id) {
        return db("steps as st")
            .join("schemes as s", "s.id", "st.scheme_id")
            .select("st.scheme_id", "st.step_number", "st.instructions")
            .where({ scheme_id: id })
    }
    function add(){
        return db("schemes")
          .insert(scheme, "id")
          .then(([id]) => {
            return findById(id);
          });
      }
    
    function update(id, changes) {
        return db("schemes")
          .where({ id })
          .update(changes)
          .then(() => {
            return findById(id);
          });
      }
    function remove(id) {
        return db("schemes")
            .where({ id })
            .del()

    }


   