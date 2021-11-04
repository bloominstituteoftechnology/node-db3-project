const Schemes = require('./scheme-model')
const { schemeSchema, stepSchema } = require('./schemas/index')
/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = async(req, res, next) => {
  try{
    const { scheme_id } = req.params
    const scheme = await Schemes.findById(scheme_id)
    if(!scheme){
      next({ status: 404, message: `scheme with scheme_id ${scheme_id} not found`})
    }else{
      req.scheme=scheme
      next()
    }
  }catch(err){
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
const validateScheme = async (req, res, next) => {
  try{
    const valid = await schemeSchema.validate(req.body)
    req.body=valid
    next()
  }catch(err){
    next({ status:400, message: err.message})
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
const validateStep = async (req, res, next) => {
  try{
    const valid = await stepSchema.validate(req.body)
    req.body = valid
    next()
  }catch(err){
    next({ status: 400, message: err.message})
  }
}
 
module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
} 
