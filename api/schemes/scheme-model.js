const db = require('../../data/db-config');

module.exports = {
  find() {
    return db('schemes');
  },
  findById(id) {
    return db('schemes').where({ id }).first();
  },
  findSteps(id) {
    return db('schemes as s')
      .join('steps as st', 's.id', 'st.scheme_id')
      .select('s.scheme_name as Scheme Name', 'st.instructions as Instructions')
      .where({ 's.id': id });
  },
  async add(scheme) {
    const [id] = await db('schemes').insert(scheme);
  },
  update(changes, id) {
    return db('schemes').where({ id }).update(changes, '*');
  },
  remove(id) {
    return db('schemes').where({ id }).del();
    },
};