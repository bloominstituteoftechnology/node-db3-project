const db = require ('../data/dbConfig');

module.exports= {
    find,
    findById,
    findSteps, //(id)
    add, //(scheme)
    update, //(changes, id)
    remove //(id)
};

// 1
function find() {
    return db('schemes');
}
// 2
function findById(id) {
    return db('schemes').where({ id }).first();
}

// 3
function findSteps(id) {
    return db('steps')
    .join('schemes', 'schemes.id', 'steps.id')
    .select('steps.id')
    .where({ id });
} //fix this


// 4
function add(schemes) {
    db('schemes').insert(scheme)
    .then(ids => {
        return findById(ids[0])
})
}

// 5
function add(id) {
    db('schemes')
    .insert(scheme)
    .select('steps.id')
    .where({ id })
    .then(ids => {
        return findById(ids[0])
})
} //this feels wrong

// 6
function update(changes, id) {
     db('schemes')
    .where({ id })
    .update(changes)
    .then(count => {
        return findById(id);
    })
    
}

// 7
function remove(id) {
    return db('schemes').where({ id }).del()
}