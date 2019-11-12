const express = require('express');

const Schemes = require('./scheme-model.js');
const schemeService = require('./scheme-service.js');

const router = express.Router();

router.get('/', (req, res, next) => {
  Schemes.find()
  .then(schemes => {
    res.json(schemes);
  })
  .catch( err => next(err) );
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;

  Schemes.findById(id)
  .then(scheme => {
    if (scheme) {
      res.json(scheme);
    } else {
      res.status(404).json({ message: 'Could not find scheme with given id.' })
    }
  })
  .catch( err => next(err) );
});

router.get('/:id/steps', (req, res, next) => {
  const { id } = req.params;

  Schemes.findSteps(id)
  .then(steps => {
    if (steps.length) {
      res.json(steps);
    } else {
      res.status(404).json({ message: 'Could not find steps for given scheme' })
    }
  })
  .catch( err => next(err) );
});

router.post('/', (req, res, next) => {
  const schemeData = req.body;

  Schemes.add(schemeData)
  .then(scheme => {
    res.status(201).json(scheme);
  })
  .catch( err => next(err) );
});

router.post('/:id/steps', (req, res, next) => {
  const stepData = req.body;
  const { id } = req.params; 

  schemeService.addStep(stepData, id)
    .then( resp => res.status(201).json(resp) )
    .catch ( err => next(err) );
});

router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const changes = req.body;

  Schemes.findById(id)
  .then(scheme => {
    if (scheme) {
      Schemes.update(changes, id)
      .then(updatedScheme => {
        res.json(updatedScheme);
      });
    } else {
      res.status(404).json({ message: 'Could not find scheme with given id' });
    }
  })
  .catch( err => next(err) );
});

router.delete('/:id', (req, res, next) => {
  const { id } = req.params;

  Schemes.remove(id)
  .then(deleted => {
    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find scheme with given id' });
    }
  })
  .catch( err => next(err) );
});

module.exports = router;