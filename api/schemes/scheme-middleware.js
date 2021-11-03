const Schemes = require('./scheme-model')
/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = async(req, res, next) => {
  try{
    const { id } = req.params.id
    const scheme = await Schemes.findById(id)
    if(!scheme){
      next({ status: 404, message: `scheme with scheme_id ${id} not found`})
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
    const { scheme_name } = req.body
    if(!scheme_name || scheme_name === '' || typeof scheme_name !== 'string'){
      next({ status: 400, message: 'invalid scheme_name' })
    }else{
      next()
    }
  }catch(err){
    next(err)
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
    const { instructions, step_number } = req.body
    if( 
      !instructions || 
      instructions === '' || 
      typeof instructions !== 'string' || 
      step_number < 1 || 
      typeof step_number !== 'number' 
      ){
      next({ status: 400, message: 'invalid step'})
    }else{
      next()
    }
  }catch(err){
    next(err)
  }
}
 
module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
} 
