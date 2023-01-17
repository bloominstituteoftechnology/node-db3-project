const Schemes = require('./scheme-model.js')
/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = async (req, res, next) => {
  // next();
  try {
    let { scheme_id } = req.params
    const scheme = await Schemes.findById(scheme_id)
    if(scheme){
      next();
    }else{
      next({ status: 404, message: `scheme with scheme_id ${scheme_id} not found`})
    }
  } catch (error) {
    next({ status: 404, message: `scheme with scheme_id ${req.params.scheme_id} not found`})
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
  try {
    let { scheme_name } = req.body
    if(scheme_name && scheme_name.length && typeof scheme_name === 'string'){
      next()
    }else{
      next({ status: 400, message: 'invalid scheme_name'})
    }
  } catch (error) {
    next(error)    
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
  try {
    let { instructions, step_number } = req.body;
    if(instructions && instructions.length && typeof instructions === 'string' &&
    step_number && typeof step_number === 'number' && step_number > 0){
      next();
    }else{
      next({ status: 400, message: 'invalid step'})
    }
  } catch (error) {
    next(error)
  }
  // next();
}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
