

const checkSchemeId = async (req, res, next) => {
  try {
    const scheme = await db('schemes')
      .select('*')
      .where("scheme_id", req.params.scheme_id)

    if(scheme.length < 1){
      return res.status(404).json({
        message: `scheme with scheme_id ${req.params.scheme_id} not found`
      })
    }

    next()
  } catch(err){
    next(err)
  }
}

const validateScheme = (req, res, next) => {
  const schemeName = req.body.scheme_name; 
  //If `scheme_name` is missing, empty string or not a string:
  if (!schemeName || schemeName.length < 1 || typeof schemeName !== "string") {
    return res.status(400).json({ 
      //status 400{"message": "invalid scheme_name"}
      message: "invalid scheme_name",
    });
  } else {
    next();
  }
}


const validateStep = (req, res, next) => {
  const instructions = req.body.instructions;
  const stepNumber = req.body.step_number;
  if (
    !instructions ||
    stepNumber < 1 ||
    typeof instructions !== "string" ||
    stepNumber < 1 ||
    typeof stepNumber !== "number"
  ) {
    return res.status(400).json({
      message: "invalid step",
    });
  } else {
    next();
  }
}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
