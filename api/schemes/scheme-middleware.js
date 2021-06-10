const db = require('../../data/db-config')
/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = async (req, res, next) => {
  try{
    const existing = await db ('schemes').where('scheme_id', req.params.scheme_id).first()
    if (!existing){
      next({
        status: 404,
        message:`scheme with scheme_id ${req.params.scheme_id} not found`

      })
    }else{
      next()
    }
  }// end of try
  catch(err){
    next(err);

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
  const {scheme_name} = req.body
  if(
    scheme_name === undefined || 
    typeof scheme_name !== 'string'||
    !scheme_name.trim()
    ){
      next({
        status: 400,
        message: 'invalid scheme name'
      })
    }//end of if
    else{
      next()
    }//end of else

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
  const {instructions, step_number} = req.body
 
  if(instructions === undefined || 
    typeof instructions !== 'string'||
    !instructions.trim() ||
    typeof step_number !== 'number' || 
    step_number < 1
    ){
      const error = {
        status: 400,
        message : 'invalid step',

    }
      next(error)
    }//end of if
    else{
      next()
    }//end of else
}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
