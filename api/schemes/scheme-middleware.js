const Scheme = require("./scheme-model");
/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/

async function checkSchemeId(req, res, next) {
  try {
    const scheme_id = await Scheme.getById(req.params.id);
    if (!scheme_id) {
      next({ status: 404, message: "schema id does not exist" });
    } else {
      req.scheme_id = scheme_id;
      next();
    }
  } catch (err) {
    res.status(500).json({ message: "problem finding scheme" });
  }
}

/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = (req, res, next) => {};

/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid step"
  }
*/
const validateStep = (req, res, next) => {};

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
};
