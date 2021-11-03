const Schemes = require('./scheme-model')

const checkSchemeId = async (req, res, next) => {
  try {
    const scheme_id = req.params.scheme_id
    const scheme = await Schemes.findById(scheme_id)
    if(scheme) {
      next()
    } else {
      next({
        status: 404,
        message: `scheme with scheme_id ${scheme_id} not found`
      })
    }
  } catch (err) {
    next(err)
  }
}

const validateScheme = (req, res, next) => {
  const { scheme_name } = req.body
  if(
    scheme_name === undefined ||
    !scheme_name.trim() ||
    typeof scheme_name !== 'string'
  ) {
    next({
      status:400,
      message: 'invalid scheme_name'
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

}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
