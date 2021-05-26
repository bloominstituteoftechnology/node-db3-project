const Scheme = require ('./scheme-model');
/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = (req, res, next) => {
const {id} = req.params 

Scheme.findById(id)
.then(scheme => {
  if (scheme){
    req.scheme = scheme;
    next();
  } else {
    res.status(404).json({message: `scheme with scheme_id ${id} does not exist`})
  }
})
}

/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = (req, res, next) => {
const schemeData = req.body 

if(!schemeData.scheme_name){
  res.status(400).json({message: " invalid scheme_name"})
} else {
  next();
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
const stepData = req.body 

if(!stepData.instructions || stepData.instructions=="" || typeof stepData != 'string' || typeof stepData.step_number != 'number' || stepData.step_number < 1){
  res.status(400).json({message: "invlaid step"})
}else{
  next();
}
}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
