

const db = require('./config')
const { ErrorHandler } = require('../helpers')

const find = async () => {
  try {
    const schemes = await db('schemes');
    return schemes
  } catch (error) {
    throw new ErrorHandler(500, 'Internal server error')
  }
}

module.exports = {
  find
}