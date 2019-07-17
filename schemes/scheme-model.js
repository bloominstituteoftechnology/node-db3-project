

const db = require('./config')
const { ErrorHandler } = require('../helpers')
const msg ='Internal server error'
const find = async () => {
  try {
    const schemes = await db('schemes');
    return schemes
  } catch (error) {
    throw new ErrorHandler(500, msg)
  }
}

const findById = async (id) => {
try {
  const scheme = await db('schemes').where({ id })
  return scheme
} catch (error) {
  throw new ErrorHandler(500, msg)
}
}

module.exports = {
  find
}