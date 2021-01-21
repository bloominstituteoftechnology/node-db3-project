// scheme-model
const db = require('../../data/db-config');

const find = () => {
    return db('schemes');
}

const findById = id => {
    const scheme = db('schemes')
        .where({ id })
        .first();
    if (!scheme)
        return Promise.resolve(null);
    else
        return scheme;
}

const findSteps = id => {
//     select 
//     s.id, sch.scheme_name, s.step_number, s.instructions
// from schemes sch
// join steps s
//     on sch.id = s.scheme_id
// where sch.id = 5
    return db('schemes as sch')
        .join('steps as s', 'sch.id', 's.scheme_id')
        .select('s.id', 'sch.scheme_name', 's.step_number', 's.instructions')
        .where('sch.id', id);
}

const add = async scheme => {
    try {
        const newSchemeId = await db('schemes')
            .insert(scheme);
        return await findById(newSchemeId[0]);
    } catch (error) {
        return { error: 'Internal server error' };
    }
}

const update = () => {
    return db('schemes');
}

const remove = () => {
    return db('schemes');
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}