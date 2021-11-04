const Schemes = require("./scheme-model");
const { schemeSchema, stepSchema } = require("./scheme-schemas/index");

const checkSchemeId = async (req, res, next) => {
  try {
    const { scheme_id } = req.params;
    const scheme = await Schemes.findById(scheme_id);
    if (!scheme) {
      next({
        status: 404,
        message: `scheme with scheme_id ${scheme_id} not found`,
      });
    } else {
      req.scheme = scheme;
      next();
    }
  } catch (err) {
    next(err);
  }
};

const validateScheme = async (req, res, next) => {
  try {
    const valid = await schemeSchema.validate(req.body);
    req.body = valid;
    next();
  } catch (err) {
    next({ status: 400, message: err.message });
  }
};

const validateStep = async (req, res, next) => {
  try {
    const valid = await stepSchema.validate(req.body);
    req.body = valid;
    next();
  } catch (err) {
    next({ status: 400, message: err.message });
  }
};

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
};
