const Schemes = require("./scheme-model");
const { schemeSchema, stepSchema } = require("./validation");
/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = async (req, res, next) => {
	try {
		if (await Schemes.findById(req.params.id)) {
			next();
		} else {
			next({ status: 404, message: `scheme with id ${req.params.id} not found` });
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
		req.body = await schemeSchema.validateAsync(req.body, {
			stripUnknown: true,
		});
		next();
	} catch (err) {
		next({ status: 400, message: "invalid scheme_name" });
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
		req.body = await stepSchema.validateAsync(req.body, {
			stripUnknown: true,
		});
	} catch (err) {
		next({ status: 400, message: "invalid step" });
	}
};

module.exports = {
	checkSchemeId,
	validateScheme,
	validateStep,
};
