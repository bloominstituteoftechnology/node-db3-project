const db = require('../../data/db-config');
/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = (req, res, next) => {
  const {id} = req.params;
  db('schemes').select('scheme_id').where({scheme_id: id});
  if (!scheme_id) {
    res.status(404).json({ message: `scheme with scheme_id ${id} not found` });
  } else {
    next();
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
  const name = req.body.name;

  db('schemes').select('scheme_name').where({scheme_name: name});
  if (!scheme_name || typeof(scheme_name) !== String || scheme_name.length() === 0) {
    res.status(400).json({ message: "invalid scheme_name" });
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
  const {id} = req.params;

  db('steps').select('step_number', 'instructions').where({step_id: id});
  if (!instructions || typeof(instructions) !== String || 
  instructions.length() === 0 ||isNaN(step_number) || step_number<1) {
    res.status(400).json({ message: "invalid step" });
  } else {
    next();
  }
}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
