
const Schemes = require('./scheme-model.js');

/*
  If `scheme_id` does not exist in the database:
  status 404{ "message": "scheme with scheme_id <actual id> not found" }
*/
const checkSchemeId = (req, res, next) => {
	// const { id } = req.params;

	// Schemes.findById(id)
  //   .then((data) => {
  //     if (!data) {
  //       res.status(404).json({message: `Car with id ${id} is not found` })
  //     } else {
  //       next();
  //     }
  //   })
	// 	.catch(next);

  next();
};

const validateScheme = (req, res, next) => {
  const scheme = req.body;

  if (!scheme.scheme_name || typeof scheme.scheme_name !== 'string') {
    res.status(400).json({ message: "invalid scheme_name" });
  } else {
    next();
  }
}

const validateStep = (req, res, next) => {
  const step = req.body;

  if (
		!step.instructions ||
		typeof step.instructions !== 'string' ||
		typeof step.step_number !== 'number' ||
		step.step_number < 1) {
      res.status(400).json({ message: "invalid step" })
	} else {
    next();
  }
}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
