const db = require("../data/config")

function findPostsByUserID(userID) {
    return db("post as p")
        .innerJoin("users as u", "u.id", "p.user_id")
        .where("p.user_id", userID)
        .select("p.id", "p.contents", "u.username")
}

function find(){
    return db("schemes")
        .select("id", "scheme_name")
}

module.exports = {
    find
}