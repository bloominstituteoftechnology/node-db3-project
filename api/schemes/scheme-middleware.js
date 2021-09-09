const Scheme = require("./scheme-model");

const checkSchemeId = async (req, res, next) => {
  const { scheme_id } = req.params;
  const scheme = await Scheme.checkSchemeId(scheme_id);
  if (scheme.length > 0) {
    next();
  } else {
    next({
      status: 404,
      message: `scheme with scheme_id ${scheme_id} not found`,
    });
  }
};

const validateScheme = (req, res, next) => {
  const { scheme_name } = req.body;
  if (!scheme_name || typeof scheme_name !== "string") {
    next({ status: 400, message: "invalid scheme_name" });
  } else {
    next();
  }
};

const validateStep = (req, res, next) => {
  const { instructions, step_number } = req.body;
  if (
    typeof instructions !== "string" ||
    typeof step_number !== "number" ||
    step_number < 1 ||
    !instructions
  ) {
    next({ status: 400, message: "invalid step" });
  } else {
    next();
  }
};

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
};
