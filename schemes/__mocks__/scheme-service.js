

const findAll = jest.fn(() => {
    return new Promise(res => res([1, 2, 3]))
})

const findById = jest.fn((id) => {
    return new Promise(res => res({scheme_name: "Test"}))
})

const findSteps = jest.fn((schemeId) => {
    return new Promise(res => res([4, 5, 6]))
})

const addStep = jest.fn((step, scheme_id) => {
    return new Promise(res => res([4, 5, 6]))
})

const add = jest.fn((newScheme) => {
    return new Promise(res => res({scheme_name: "Test"}))
})

const update = jest.fn((changes, id) => {
    return new Promise(res => res({scheme_name: "Updated"}))
})

const remove = jest.fn((id) => {
    return new Promise(res => res({scheme_name: "Removed"}))
})

module.exports = {
    findAll,
    findById,
    findSteps,
    addStep,
    add,
    update,
    remove
}