const Schemes = require("./scheme-model");
const { schemeSchema, stepSchema } = require("./validation");

const checkSchemeId = async (req, res, next) => {
	try {
		if (await Schemes.findById(req.params.scheme_id)) {
			next();
		} else {
			next({
				status: 404,
				message: `scheme with scheme_id ${req.params.scheme_id} not found`,
			});
		}
	} catch (err) {
		next(err);
	}
};

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

const validateStep = async (req, res, next) => {
	try {
		req.body = await stepSchema.validateAsync(req.body, {
			stripUnknown: true,
		});
		next();
	} catch (err) {
		next({ status: 400, message: "invalid step" });
	}
};

module.exports = {
	checkSchemeId,
	validateScheme,
	validateStep,
};
