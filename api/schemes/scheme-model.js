// scheme-model
const db = require('../../data/db-config')

module.exports = {
    find
};

function find() {
    return db('schemes');
}

function findById(id) {

}

function findSteps(id) {

}

function add(scheme) {

}

function update(changes, id) {

}

function remove(id) {

}
