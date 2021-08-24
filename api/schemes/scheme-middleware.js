const Scheme = require("../schemes/scheme-model.js");
/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = async (req, res, next) => {
  try {
    const schemeID = req.params.id;
    const scheme = await Scheme.findById(schemeID);
    if(!scheme){
      res.status(404).json({message: `Scheme with scheme_id ${schemeID} not found`})
    } else {
      req.scheme = scheme;
      next()
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
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
    const { scheme_name } = req.body
    if(scheme_name){
      next()
    } else {
      res.status(400).json(`Invalid scheme_name`)
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
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
  if(!instructions){
    res.status(400).json(`Instructions are missing`)
  } else if (step_number < 1){
    res.status(400).json(`Invalid step`)
  } else {
    next()
  }
}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
