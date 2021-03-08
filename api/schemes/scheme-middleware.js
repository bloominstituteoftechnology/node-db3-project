const db = require('../../data/db-config');

const checkSchemeId = () => {
  return async (req, res, next) => {
    try {
      const { scheme_id } = req.params
      const scheme = await db("schemes").where( { scheme_id } ).first()

      if (!scheme) {
          return res.status(404).json({
          message: `scheme with scheme_id ${scheme_id} not found`,
        })
      }

      req.scheme = scheme
      next()
    } catch(err) {
      next(err)
    }
  }
}

const validateScheme = () => {
  return async (req, res, next) => {
    try {
      const { scheme_name } = req.body;

      if (!scheme_name || scheme_name === '' || typeof scheme_name !== 'string') {
        await res.status(400).json({
          message: `invalid scheme_name`,
        })
      }
      next()
    } catch(err) {
      next(err)
    }
  }
}

const validateStep = () => {
  return async (req, res, next) => {
    try {
      const { instructions, step_number } = req.body;

      if (!instructions || instructions === '' || typeof instructions !== 'string' || typeof step_number !== 'number' || step_number < 1) {
        await res.status(400).json({
          message: `invalid step`,
        })
      }
      next()
    } catch(err) {
      next(err)
    }
  }
}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/

/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid step"
  }
*/
