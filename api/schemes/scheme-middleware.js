const Scheme = require("../schemes/scheme-model.js")

const checkSchemeId = (req, res, next) => {
  try {
  const { id } = req.params
  const scheme = Scheme.findById(id)
    if(!scheme){
      res.status(404).json(`scheme with scheme_id ${id} is not found`)
} else {
    req.scheme = scheme
    next()
}} catch (error) {
    res.status(500).json({ message: error.message })
}}


const validateScheme = (req, res, next) => {
const { scheme_name } = req.body
if( scheme_name === undefined ||
    typeof scheme_name !== 'string' ||
    !scheme_name.trim()
){
   next({status:400, message:'invalid scheme_name'})
}else {
    next()
}}


const validateStep = (req, res, next) => {
const { instructions, step_number } = req.body
  if(!instructions){
    res.status(400).json(`Instructions is missing`)
} else if (step_number < 1){
    res.status(400).json(`Invalid step`)
} else {
    next()
}}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
