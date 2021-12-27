const schemeModel = "./scheme-model.js";
/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const scheme = await schemeModel.findById(id);
    if (!scheme) {
      res.status(404).json(`scheme with id ${id} could not be found`);
    } else {
      res.json(scheme);
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
const validateScheme = async (req, res, next) => {
  try {
    const body = req.body;
    if (
      !body.scheme_name ||
      body.scheme_name === undefined ||
      typeof body.scheme_name !== "string"
    ) {
      res.status(400).json({ message: "invalid scheme_name" });
    } else {
      next();
    }
  } catch (err) {
    next(err);
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
const validateStep = async (req, res, next) => {
  try {
    const body = req.body;
    if (
      !body.instructions ||
      typeof body.instructions !== "string" ||
      isNaN(body.step_number) ||
      body.step_number < 1
    ) {
      res.status(400).json({ message: "invalid step" });
    }
  } catch (err) {
    next(err);
  }
};

//exporting middleware
module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
};
