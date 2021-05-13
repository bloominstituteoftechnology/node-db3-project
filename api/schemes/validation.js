const Joi = require("joi");

const schemeSchema = Joi.object({
	scheme_name: Joi.string().trim().required(),
});

const stepSchema = Joi.object({
	instructions: Joi.string().trim().required(),
	step_number: Joi.number().integer().min(0).required(),
});

module.exports = { schemeSchema, stepSchema };
