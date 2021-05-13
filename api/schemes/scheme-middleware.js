const db = require('../../data/db-config');
const Scheme = require('./scheme-model');
/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = async (req, res, next) => {
try {
  const scheme = await db('schemes');
   if (!scheme) {
     next({status: 404, message: `scheme with ${req.params.scheme_id} not found`})
   } else {
     req.scheme = scheme
   }
} catch (err) {
  next(err)
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
  const error = {status: 400};
  const {scheme_name} = req.body;
  if (!scheme_name || typeof scheme_name !== "string" || scheme_name === "") {
    error.message = 'invalid scheme_name'
    next(error)
  } else {
    next()
  }
}

const validateStep = (req, res, next) => {
/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid step"
  }
*/
const error = {status: 400};
const {step_number, instructions} = req.body;
if (!instructions || typeof instructions !== "string" || instructions === "" || typeof step_number !== "number" || step_number < 1) {
  error.message = 'invalid step'
  next(error)
} else {
  next()
}
}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
