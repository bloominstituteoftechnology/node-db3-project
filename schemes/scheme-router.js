const express = require('express');

const Schemes = require('./scheme-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  try {
    const schemes = await Schemes.find();
    res.json(schemes);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get schemes' });
  }
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  try {
    const scheme = Schemes.findById(id);

    if (scheme) {
      res.json(scheme);
    } else {
      res.status(404).json({ message: 'Could not find scheme with given id.' })
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to get schemes' });
  }
});

router.get('/:id/steps', (req, res) => {
  const { id } = req.params;

  try {
    const steps = Schemes.findSteps(id);

    if (steps.length) {
      res.json(steps);
    } else {
      res.status(404).json({ message: 'Could not find steps for given scheme.' })
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to get steps' });
  }
});

router.post('/', (req, res) => {
  const schemeData = req.body;

  try {
    const scheme = await Scheme.add(schemeData);
    res.status(201).json(scheme);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create new scheme' });
  }
});

router.post('/:id/steps', (req, res) => {
  const stepData = req.body;
  const { id } = req.params; 

  try {
    const scheme = await Scheme.FindById(id);

    if (scheme) {
      const step = await Scheme.addStep(stepData, id);
      res.status(201).json(step);
    } else {
      res.status(404).json({ message: 'Could not find scheme with given id.' })
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to create new step' });
  }
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  try {
    const scheme = await Scheme.findById(scheme);

    if (scheme) {
      const updatedScheme = await Schemes.update(changes, id);
      res.json(updatedScheme);
    } else {
      res.status(404).json({ message: 'Could not find scheme with given id' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to update scheme' });
  }
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Schemes.remove(id);

    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find scheme with given id' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete scheme' });
  }
});

module.exports = router;