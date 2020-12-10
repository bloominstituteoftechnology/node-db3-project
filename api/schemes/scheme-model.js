const db = require("../../data/db-config.js");

// scheme-model
 module.exports = {
    find() {
        return db('schemes')
    },

    findById(id) {
        return db('schemes as s')
        .where('s.id', id)
        .first()
    },

    findSteps(id) {
        return db('steps as st')
        .join('schemes as sc', 'sc.id', 'st.scheme_id')
        .select(
            'st.id', 
            'sc.scheme_name',
            'step_number',
            'instructions'
        )
        .where('st.scheme_id', id)
        .orderBy('st.step_number', 'asc')

    },

    add(scheme) {
        return db('schemes')
        .insert(scheme)
        .then(ids => {
            return findById(ids[0]);
        });
    },

    update(changes, id) {

    },

    remove(id) {

    }
 }