const Schemes = require('./scheme-model.js');




/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
/////NOT PASSING
// const checkSchemeId = async (req, res, next) => {
//     try {
//       const schemeId = req.params.id;
//       const scheme =  await Schemes.findById(schemeId); //**Will write this in the model */
          
//       if(!scheme) {
//         res.status(404).json({message: `scheme with scheme_id ${schemeId} not found`})
//       } else {
//         req.scheme = scheme;
//         next();
//       }
//     }catch (error) {
//       res.status(500).json({message: "Error"})
//     }
// };

const checkSchemeId = () => async (req, res, next) => {
  const { scheme_id} = req.params;
  try {
    await db("schemes").where({ scheme_id}).first();
    req.schemeSearch = { scheme_id};
    next()
  } catch {
    res
      .status(404)
      .json({ message: `scheme with scheme ID ${scheme_id} not found`})
  }
}



/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = (req, res, next) => {
  const newScheme = req.body;

  if(!newScheme.scheme_name || newScheme.scheme_name.length === 0 || typeof newScheme.scheme_name !== 'string' ) {
    res.status(400).json({message: "invalid scheme_name"})
  } else {
    next();
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
const validateStep = (req, res, next) => {
    const newStep = req.body;
    console.log('This should be the step instructions,', newStep);
  if(!newStep.instructions || newStep.instructions.length === 0 || typeof newStep.instructions !== "string") {
    res.status(400).json({message: "invalid step"})
  } else if (typeof newStep.step_number !== "number" || newStep.step_number < 1) {
    res.status(400).json({message: "invalid step"})
  } else {
    next();
  }

};






module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
