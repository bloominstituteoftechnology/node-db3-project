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

const validateStep = (req, res, next) => {
  const { instructions, step_number } = req.body
  if (
    instructions === undefined ||
    typeof instructions !== 'string' ||
    !instructions.trim() ||
    typeof step_number !== 'number' ||
    step_number < 1
  ) {
    next({
      status:400,
      message: 'invalid step'
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
