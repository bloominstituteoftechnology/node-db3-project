const Schemes = require("./scheme-model.js");

/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = async (req, res, next) => {
  const { scheme_id } = req.params;
  try {
    const scheme = await Schemes.findById(scheme_id);
    console.log(scheme_id);
    if (scheme) {
      next();
    } else {
      res.status(404).json({
        message: `scheme with scheme_id ${scheme_id} not found`,
      });
    }
  } catch (err) {
    next(err);
  }
};

/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = (req, res, next) => {
  const { scheme_name } = req.body;
  if (!scheme_name || scheme_name === "" || typeof scheme_name !== "string") {
    res.status(400).json({ message: "invalid scheme_name" });
  } else {
    next();
  }
};

/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid step"
  }
*/
const validateStep = (req, res, next) => {
  const { step } = req.body;
  console.log(step);
  if (
    typeof step_number !== "number"
    // ||
    // step_number.length < 1 ||
    // !step_instructions ||
    // typeof step_instructions !== "string"
  ) {
    res.status(400).json({ message: "invalid step" });
  } else {
    next();
  }
};

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
};
