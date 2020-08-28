const db = require("../data/dbConfig")

function find() {
    return db("schemes")
}

function findById(id) {
    return db("schemes")
        .where("schemes.id", id)
}

function findSteps(id) {
    return db("schemes")
        .join('steps', 'schemes.id', '=', 'steps.scheme_id')
        .where("schemes.id", id)
        .orderBy("steps.step_number")
}

function findPostsByUserID(userID) {
	return db("posts as p")
		.innerJoin("users as u", "u.id", "p.user_id")
		.where("p.user_id", userID)
		.select("p.id", "p.contents", "u.username")
}

module.exports = {
    find,
    findById,
    findSteps,
}