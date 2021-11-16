const Scheme = require('./scheme-model')

/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = async (req, res, next) => {
  try {
    const { id } = req.params.id
    const schemeID = await Scheme.findById(id)
    if (!schemeID) {
      res.status(404).json({
        status: 404,
        message: 'Scheme with specific ID is not found'
      })
    } else {
      next()
    }
  } catch (error) {
    next(error)
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
  const { scheme_name } = req.body
  if (!scheme_name || scheme_name == !typeof 'string') {
    res.status(400).json({
      status: 400,
      message: 'Invalid scheme name'
    })
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
  const { instructions, step_number } = req.body
  if (!instructions || instructions == !typeof 'string') {
    res.status(400).json({
      status: 400,
      message: 'Invalid step'
    })
  } else if (!step_number || step_number ==!typeof 'string') {
    res.status(400).json({
      status: 400,
      message: 'Invalid step'
    })
  } else {
    next()
  }
}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
