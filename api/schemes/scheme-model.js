// scheme-model


const db = require('../..data/db-config');

async function find() {
    return await db('schemes');


}

async function findById(id) {
    return await db ('schemes').where({ id }).first();

}

async function findSteps(id) {
    return await db.select(
        'steps.id',
        'schemes.scheme_name',
        'steps.step_number',
        'steps.instructions'
    )
    .where({ scheme_id: id })
    .from('steps')
    .join('schemes', 'steps.scheme_id', '=', 'schemes.id')
    .orderBy('steps.step_number');
}

async function add(scheme) {
    const [id] = await db('schemes').insert(scheme);
    return { id, ...scheme };
}

async function update(changes, id) {
    const count = await db('schemes').where({ id }).update(changes)
    if (count === 0) throw new Error();
    else return { id, ...changes };
}

async function remove(id) {
    return await db('schemes').where({ id }).del();
}


module.exports = { find, findById, findsSteps, add, update, remove }