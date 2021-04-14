const Scheme = require("./scheme-model");

/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = async (req, res, next) => {
  const { id } = req.params;

  const scheme = await Scheme.findById(id)
  if (!scheme) {
    res.status(404).json({
      "message": "scheme with scheme_id <actual id> not found"
    })
  } else {
    next()
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
  const schemeName = req.body.scheme_name;

  if (!schemeName) {
    res.status(404)
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
  const body = req.body
  if (!body.instructions ||
    typeof body.instructions !== "string" ||
    body.instructions.trim().length <= 0 ||
    !body.step_number ||
    typeof body.step_number != "number" ||
    body.step_number < 1) {
    res.status(404).json({
      "message": "invalid step"
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
