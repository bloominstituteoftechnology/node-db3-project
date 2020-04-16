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
    .select()
    // .distinct();
    // s.id", "s.scheme_name
}

// "schemes.id", "schemes.scheme_name", "steps.instructions", 

function findById(id) {
    return db("schemes")
            .where({ id })
            .first()
            
            
            
}

    function findSteps(scheme_id) {
        return db("steps as st")
            // .join("schemes as s", "s.id", "st.scheme_id")
            .select()
            .where({ scheme_id: scheme_id })
    }
    function add(scheme){
        return db("schemes")
          .insert(scheme, "id")
          .then(([id]) => {
            return findById(id);
          });
      }
    
    function update(changes, id) {
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


   