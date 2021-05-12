const Joi = require("joi");

const schemeSchema = Joi.object({
	schema_name: Joi.string().trim().required(),
});

const stepSchema = Joi.object({
	step_number: Joi.number().integer().required(),
	instructions: Joi.string().trim().required(),
});

module.exports = { schemeSchema, stepSchema };
