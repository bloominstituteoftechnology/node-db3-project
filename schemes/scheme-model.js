const db = require('../data/db.config.js');

module.exports = {
    find,
    findById,
    findSteps,
    /* add,
    update,
    remove,*/
};

function find() {
    return db('schemes');
}
/*find():
Calling find returns a promise that resolves to an array of all schemes in the database.
No steps are included.*/



function findById(id) {
    return db('schemes')
        .where({ id })
        .first()
        .then(scheme => {
            if (scheme) {
                return scheme
            } else {
                return null
            }
        })
}


/*id: 17, scheme_name: 'Find the Holy Grail', step_number: 1, instructions: 'quest' }, { id: 18, scheme_name: 'Find the Holy Grail', step_number: 2, instructions: '...and quest' })
 */

function findSteps(id) {
    return db('schemes')
        .innerJoin('steps', 'schemes.id', 'steps.scheme_id')
        .where({ scheme_id: id })
        .select('schemes.scheme_name', 'steps.step_number', 'steps.instructions')
}

function add(scheme) {
    return db('schemes')
        .insert(scheme, 'id').then(id => {
            return findById(...id);
        })

}


/*add(scheme):
Expects a scheme object.
Inserts scheme into the database.
Resolves to the newly inserted scheme, including id.*/

function update(scheme) {
    return db('schemes')
        .where({ id })
        .update({ changes }).then(id => {
            return findById(...id);
        })
}

/*update
(changes, id):
Expects a changes object and an id.
Updates the scheme with the given id.
Resolves to the newly updated scheme object. */

function remove(id) {
    const delScheme = findById(id)
    const =  db('schemes')
        .where({ id })
        .del()

}