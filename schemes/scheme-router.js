const express = require('express')
const Schemes = require('./scheme-model.js')
const router = express.Router()


//#########################################################################################################################################
// ------------------------------------------------------------------ |
//                             Create                                 |
// ------------------------------------------------------------------ |

/**
* Creates a new record
*
* @param  none
* @return status 201 / JSON response / the newly created record
*/
router.post('/', (req, res) => {
  const schemeData = req.body

  Schemes.add('schemes', schemeData)
  .then(scheme => {
    res.status(201).json(scheme)
  })
  .catch (err => {
    res.status(500).json({ error: 'Failed to create new scheme record' })
  })
})


/**
* Creates a new step for the record that matches the passed id
*
* @param  id
* @return status 201 / JSON response / the newly created record
*/
router.post('/:id/steps', (req, res) => {
  const stepData = req.body
  const { id } = req.params 

  Schemes.findSteps('schemes', id)
  .then(scheme => {
    if (scheme) {
      Schemes.addStep(stepData, id)
      .then(step => {
        res.status(201).json(step)
      })
    } else {
      res.status(404).json({ error: `Could not find scheme with id:${id}` })
    }
  })
  .catch (err => {
    res.status(500).json({ error: 'Failed to create new step' })
  })
})


//#########################################################################################################################################
// ------------------------------------------------------------------ |
//                             Read                                   |
// ------------------------------------------------------------------ |

/**
* Returns ALL records
*
* @param  none
* @return status 200 / JSON object / single, multiple record(s)
*/
router.get('/', (req, res) => {
  Schemes.findAll('schemes')
  .then(schemes => {
    res.status(200).json(schemes)
  })
  .catch(err => {
    res.status(500).json({ error: 'Failed to get schemes' })
  })
})

/**
* Returns a single record that matches the passed id param
*
* @param  id
* @return status 200 / JSON object / Single record
*/
router.get('/:id', (req, res) => {
  const { id } = req.params

  Schemes.findById('schemes', id)
  .then(scheme => {
    if (scheme) {
      res.status(200).json(scheme)
    } else {
      res.status(404).json({ error: 'Could not find scheme with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ error: 'Failed to get schemes' })
  })
})

/**
* Returns all steps records for the schemes record that matches the passed id param
*
* @param  id
* @return status 200 / JSON object / None, single, multiple record(s)
*/
router.get('/:id/steps', (req, res) => {
  const { id } = req.params

  Schemes.findSteps('schemes', 'steps', id)
  .then(steps => {
    if (steps.length) {
      res.status(200).json(steps)
    } else {
      res.status(404).json({ error: `Could not find steps for scheme record with id:${id}` })
    }
  })
  .catch(err => {
    res.status(500).json({ error: 'Failed to get steps' })
  })
})

//#########################################################################################################################################
// ------------------------------------------------------------------ |
//                             Update                                 |
// ------------------------------------------------------------------ |

/**
* Updates a scheme record that matches the passed id param
*
* @param  id
* @return status 200 / JSON object / Single record
*/
router.put('/:id', (req, res) => {
  const { id } = req.params
  const changes = req.body

  Schemes.findById('schemes', id)
  .then(scheme => {
    if (scheme) {
      Schemes.update(changes, id)
      .then(updatedScheme => {
        res.status(200).json(updatedScheme)
      })
    } else {
      res.status(404).json({ error: `Could not find scheme with id:${id}` })
    }
  })
  .catch (err => {
    res.status(500).json({ error: 'Failed to update scheme' })
  })
})


//#########################################################################################################################################
// ------------------------------------------------------------------ |
//                             Delete                                 |
// ------------------------------------------------------------------ |

/**
* Deletes a scheme record that matches the passed id param
*
* @param  id
* @return status 204 / JSON object / Message: Record successfully removed
*/
router.delete('/:id', (req, res) => {
  const { id } = req.params

  Schemes.remove('schemes', id)
  .then(deleted => {
    if (deleted) {
      res.status(204).json({ message: 'Record successfully removed' })
    } else {
      res.status(404).json({ error: `Could not find scheme with id:${id}` })
    }
  })
  .catch(err => {
    res.status(500).json({ error: 'Failed to delete scheme' })
  })
})



module.exports = router