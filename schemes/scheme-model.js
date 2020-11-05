// scheme-model
const db = require("../data/db-config.js");


module.exports = {
    getAll(){
        return db('schemes')
    },
    getById(id) {
        return db("schemes").where({ id }).first()
      },
      async create(user) {
        const [id] = await db("schemes").insert(user)
        return db('schemes').where({ id }).first()
      },
      findSteps(id) {
        return db('Schemes as Sch')
          .join('Steps as s', 'Sch.id', 's.scheme_id')
          .select('Sch.scheme_name', 'S.instructions')
          .where({ 'sch.id': id })
      },
      async update(id, changes) {
        const count = await db("schemes").where({ id }).update(changes)
        if (count) {
          return db('schemes').where({ id }).first()
        } else {
          return Promise.resolve(null)
        }
      },
      async delete(id) {
        const scheme = await db('schemes').where({ id }).first()
        if (!scheme) return Promise.resolve(null)
        await db("schemes").where({ id }).del()
        return Promise.resolve(scheme)
      }


    
    
    }