const db = require('../data/db-config.js');

function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes')
        .where({ id })
        .first();
}

// select s.id, sc.scheme_name, s.step_number, s.instructions
// from [steps] as s
// join [schemes] as sc
// on s.scheme_id = sc.id
// where sc.id = '5'
// order by s.step_number

function findSteps(id) {
    return db('schemes as sc')
        .join('steps as s', 's.scheme_id', 'sc.id')
        .select('s.id', 'sc.scheme_name', 's.step_number', 's.instructions')
        .where({ 'sc.id': id})
        .orderBy('s.step_number')
}


function add (scheme) { 
    return db('schemes').insert(scheme).then(res => {

    if (res) {
        return findById(res[0])
    } else {
        return res.status(500).json({ message: 'Failed to get schemes' });
    }

    })
}



// Expects a changes object and an id.
// Updates the scheme with the given id.
// Resolves to the newly updated scheme object.

function update(changes, id) {
    return db('schemes').where({ id }).update(changes)
     
}

// Removes the scheme object with the provided id.
// Resolves to the removed scheme
// Resolves to null on an invalid id.
// (Hint: Only worry about removing the scheme. The database is configured to automatically remove all associated steps.)

function remove(id) {
    return db('schemes').where({ id }).del()
}


module.exports = {
    find,
    findById,
    findSteps,
    update,
    remove,
    add
};