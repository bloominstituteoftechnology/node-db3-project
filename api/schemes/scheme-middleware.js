const db = require("../../data/db-config");

const checkSchemeId = async (req, res, next) => {
  try {
    const check = await db("schemes")
      .where("scheme_id", req.params.scheme_id)
      .first();
    if (!check) {
      res.status(404).json({
        message: `scheme with scheme_id ${req.params.scheme_id} not found`,
      });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

const validateScheme = (req, res, next) => {
  const { scheme_name } = req.body;
  if (!scheme_name || typeof scheme_name !== "string") {
    res.status(400).json({ message: "invalid scheme_name" });
  } else {
    next();
  }
};

const validateStep = (req, res, next) => {
  const { instructions, step_number } = req.body;
  if (
    !instructions ||
    typeof instructions !== "string" ||
    step_number <= 0 ||
    isNaN(step_number)
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
