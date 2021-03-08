// DO NOT CHANGE THIS FILE
const express = require('express')
const { checkSchemeId, validateScheme, validateStep } = require('./scheme-middleware')
const Schemes = require('./scheme-model.js')

const router = express.Router()

// Get All Schemes
router.get('/', async (req, res, next) => {
  try {
    const results = await Schemes.find();
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
})

// Get Specific Scheme
router.get('/:scheme_id', checkSchemeId(), async (req, res, next) => {
  try {
    const scheme = await Schemes.findById(req.params.scheme_id)
    res.status(200).json(scheme)
  } catch (err) {
    next(err)
  }
})

// Get Scheme's Steps
router.get('/:scheme_id/steps', checkSchemeId(), async (req, res, next) => {
  try {
    const results = await Schemes.findSteps(req.params.scheme_id)
    res.status(200).json(results)
  } catch (err) {
    next(err);
  }
})

// Add New Scheme
router.post('/', validateScheme(), async (req, res, next) => {
  const scheme = req.body
  try {
    const newScheme = await Schemes.add(scheme);
    res.status(201).json(newScheme);
  } catch (err) {
    next(err);
  }
})

// Add New Step
router.post('/:scheme_id/steps', checkSchemeId(), validateStep(), async (req, res, next) => {
  try {
    const step = await Schemes.addStep(req.body);
    res.status(201).json(step);
  } catch (err) {
    next(err);
  }
})

// Error Handling
router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    sageAdvice: 'Finding the real error is 90% of the bug fix',
    error: err.message,
    stack: err.stack,
  })
})

module.exports = router


/**
  [GET] /api/schemes

  response:
  [
    {
      "scheme_id": 1,
      "scheme_name": "World Domination",
      "number_of_steps": 3
    },
    {
      "scheme_id": 2,
      "scheme_name": "Get Rich Quick",
      "number_of_steps": 2
    },
    // etc
  ]
 */
/*
  [GET] /api/schemes/2

  response:
  {
    "scheme_id": 2,
    "scheme_name": "Get Rich Quick",
    "steps": [
      {
          "step_id": 5,
          "step_number": 1,
          "instructions": "collect all the sheep in Scotland"
      },
      {
          "step_id": 4,
          "step_number": 2,
          "instructions": "profit"
      }
    ]
  }
*/
/*
  [GET] /api/schemes/2/steps

  response:
  [
    {
      "step_id": 5,
      "step_number": 1,
      "instructions": "collect all the sheep in Scotland",
      "scheme_name": "Get Rich Quick"
    },
    {
      "step_id": 4,
      "step_number": 2,
      "instructions": "profit",
      "scheme_name": "Get Rich Quick"
    }
  ]
*/
/*
  [POST] /api/schemes/5/steps { "instructions": "and yet more questing", "step_number": 2 }

  response:
  [
    {
      "step_id": 12,
      "step_number": 1,
      "instructions": "quest and quest some more",
      "scheme_name": "Find the Holy Grail"
    },
    {
      "step_id": 17,
      "step_number": 2,
      "instructions": "and yet more questing",
      "scheme_name": "Find the Holy Grail"
    }
  ]
*/
/*
  [POST] /api/schemes { "scheme_name": "Take Ovah" }

  response:
  {
    "scheme_id": 8,
    "scheme_name": "Take Ovah"
  }
*/
