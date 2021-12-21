const db = require('../../data/db-config')

/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = async (req, res, next) => {
  try {
    const scheme = await db('schemes').where({ scheme_id: req.params.scheme_id }).first()
    //const scheme = await db('schemes').where( 'scheme_id', req.params.scheme_id ).first()
    //18min
    if (!scheme.length) {
      res.status(404).json({ message: `scheme with scheme_id ${req.params.scheme_id} not found` })
    } 
    // if (!scheme) {
    // next ({ status: 404, message:  `scheme with scheme_id ${req.params.scheme_id} not found` })
    
    else {
      console.log('Scheme found', scheme)
      next()
    }
  } catch (error) {
    res.status(500).json({ message: 'error checking scheme_id' })
  }
}

/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = (req, res, next) => {
  if (!req.body.scheme_name || 
    typeof req.body.scheme_name !== 'string' || 
    //!req.body.scheme_name.trim() ||
    req.body.scheme_name === '') {
    //!req.body.scheme_name.trim() 
    res.status(400).json({ message: 'invalid scheme_name' })
  } else {
    next()
  } 
}

/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid step"
  }
*/
const validateStep = (req, res, next) => {

}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
