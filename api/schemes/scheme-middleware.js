const Schemes = require('./scheme-model')

/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = (req, res, next) => {
  // const { scheme_id } = req.params
  // Schemes.findById(scheme_id)
  //   .then(scheme => {
  //     if (scheme === null) {
  //       res.status(404).json({ message: `scheme with scheme_id ${scheme_id} not found` })
  //     } else {
  //       next()
  //     }
  //   })
  //   .catch(err => {
  //     res.status(500).json({ message: err.message })
  //   })
  next()
}

/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = (req, res, next) => {
  if (!req.body.scheme_name || req.body.scheme_name === "" || typeof req.body.scheme_name !== 'string') {
    res.status(400).json({ message: 'Invalid Scheme name' })
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
  if (!req.body.instructions || req.body.scheme_instructions === "" ||
    typeof req.body.instructions !== 'string' || typeof req.body.step_number !== 'number' || req.body.step_number < 1
  ) {
    res.status(400).json({ message: 'invalid step' })
  }
  else {
    next()
  }
}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
