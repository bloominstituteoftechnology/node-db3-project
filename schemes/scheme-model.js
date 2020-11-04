// scheme-model
const db = require('../data./db-config.js')

module.exports = {
    find() {
        return db('schemes')
    }
    findById(id) {
        return db('schemes')
        .where({ id: id }).first()
    }
    findSteps(id) {
        return db("schemes")
        .join("steps", "steps.scheme_id", "schemes.id")
        .select(
            "steps.id",
            "schemes.scheme_name",
            "steps.step_number",
            "steps.instructions",
            
        )
        .where({"schemes.id": id})
        .orderBy("steps.step_number");
    }
    add(scheme) {
        return db('scheme')
        .insert(scheme)
        .then((id) => {
            return findById(id)
        })
        .catch((err) => {
            return null.
        })
    }
    update(changes, id) {
        db("scheme")
          .where({ id })
          .update(changes)
          .then((scheme) => {
            if (scheme) {
              return findById(id);
            } else {
              return null;
            }
          })
          .catch((err) => {
            return null;
          });
        }
    remove(id) {
        return db("schemes").where({ id }).del();   
    }      
}
    
