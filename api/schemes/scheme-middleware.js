const Schemes = require('./scheme-model');
const yup = require('yup');
/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = (req, res, next) => {

  Schemes.findById(req.params.scheme_id)
    .then(schemeById => {
      if (schemeById) {
        req.scheme = schemeById;
        next();
      } else {
        next({ status: 404, message: `scheme with scheme_id <${req.params.scheme_id}> not found` })
      }
    })
    .catch(next)
}




const schemeValidation = yup.object().shape({
  scheme_name: yup
    .string()
    .trim()
    .typeError("invalid scheme_name")
    .required("invalid scheme_name")
})



/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = (req, res, next) => {
  schemeValidation.validate(req.body,
    {
      strict: true,
      stripUnknown: true
    })
    .then(validate => {
      Schemes.find()
        .then(schemes => {
          let foundSchemes = schemes.filter(scheme => scheme.scheme_name === validate.scheme_name)
          if (foundSchemes.length < 1) {
            req.body = validate;
            next();
          } else {
            next({ status: 400, message: 'scheme name is taken' })
          }
        })
        .catch(next)
    })
    .catch(err => {
      next({ status: 400, message: err.message })
    })
}

const stepValidation = yup.object().shape({
  instructions: yup
    .string()
    .trim()
    .typeError("invalid scheme_name")
    .required("invalid scheme_name"),
  step_number: yup
    .number()
    .min(1, 'invalid step')
})

/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid step"
  }
*/
const validateStep = (req, res, next) => {

  stepValidation.validate(req.body,
    {
      strict: true,
      stripUnknown: true
    })
    .then(validate => {
      req.body = validate;
      next()
    })
    .catch(err => {
      next({ status: 400, message: err.message })
    })
}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
