const { findById } = require("./scheme-model")

/*
  If `scheme_id` does not exist in the database:
  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = () => {
  return async (req, res, next) => {
    try {
      const scheme = await findById(req.params.scheme_id)

      if(!scheme) {
        return res.status(404).json({
          message: `scheme with scheme_id ${req.params.scheme_id} not found`
        })
      } else {
        req.scheme = scheme
        next()
      }
    } catch(err) {
    next(err)
    }
  }
}

/*
  If `scheme_name` is missing, empty string or not a string:
  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = () => {
  return (req, res, next) => {
    try {
      if(!req.body.scheme_name || req.body.scheme_name === "" || typeof req.body.scheme_name !== "string"){
        res.status(400).json({
          message: "invalid scheme_name"
        })
      } else {
        next()
      }
    } catch(err) {
      next(err)
    }
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
const validateStep = () => {
  return (req, res, next) => {
    try {
      if(!req.body.instructions 
        || req.body.instructions === "" 
        || typeof req.body.instructions !== "string" 
        || typeof req.body.step_number !== "number"
        || req.body.step_number < 1){
          res.status(400).json({
            message: "invalid step"
          })
      } else {
        next()
      }
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