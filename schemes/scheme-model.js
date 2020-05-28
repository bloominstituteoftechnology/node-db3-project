const db = require('../data/db-config.js')

function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes').where({ id });
}


function findSteps(id) {
    return db( 'steps as c')
    .join('schemes as s', 's.id', 'c.scheme_id',)
    .select('s.scheme_name', 'c.step_number', 'c.instructions', )
    .where({ scheme_id: id });
}

function add(schemeData) {
    return db('schemes').insert(schemeData);
}

function addStep(stepData) {
    return db('steps','schemes').insert(stepData)
}
// async function addStep(stepData) {
//     return new Promise((resolve, reject) => {

//         const result = await db('schemes').insert(stepData);
//         if (result) {
//             resolve({ mySpecialAddedField: "added value...", ...result });
//         } else {
//             reject(null);
//         }

//     });
// }

function update(changes, id) {
    return db('schemes').where({ id }).update(changes);
}

function remove(id) {
    return db('schemes').where({ id }).del();
}

module.exports = {
find, 
findById,
findSteps,
add,
addStep,
update,
remove
}


