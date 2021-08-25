const Scheme = require('./scheme-model')


/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = async (req, res, next) => {
    try {
      const schemeId = await Scheme.findById(req.params.id)
      if (!schemeId){
        res.status(404).json({
          message: `scheme with scheme_id ${req.params.id} not found`

        })
      }else {
        req.schemeId = schemeId

        next()
      }
    } catch(err) {
      res.status(500).json({
        message: 'problem finding id'
      })

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
  const {name } = req.body
  if(!name || !name.trim() ){
    res.status(400).json({

      message: "invalid scheme_name"

    })
  } else {
    req.name = name.trim()

    next()
  }
}

/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid step"
  }
*/
const validateStep = (req, res, next) => {
  const {text} = req.body
  if(!text || !text.trim()){
    res.status(400).json({
      message: 'invalid step'
    })
  } else {
    req.text = text.trim()

    next()
  }
}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
