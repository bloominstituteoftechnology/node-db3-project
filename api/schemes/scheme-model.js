// scheme-model
const db = require("../../data/db-config")

function find() {
    return db("scheme")
}

module.exports = {
	find,
}