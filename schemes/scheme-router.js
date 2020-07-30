const express = require('express');

const Schemes = require('./scheme-model.js');

const router = express.Router();

router.get('/', (req, res) => {
	Schemes.find()
		.then((schemes) => {
			res.json(schemes);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to get schemes' });
		});
});

router.get('/:id', (req, res) => {
	const { id } = req.params;

	Schemes.findById(id)
		.then((scheme) => {
			if (scheme) {
				res.json(scheme);
			} else {
				res
					.status(404)
					.json({ message: 'Could not find scheme with given id.' });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to get schemes' });
		});
});

router.get('/:id/steps', (req, res) => {
	const { id } = req.params;

	Schemes.findSteps(id)
		.then((steps) => {
			if (steps.length) {
				res.json(steps);
			} else {
				res
					.status(404)
					.json({ message: 'Could not find steps for given scheme' });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to get steps' });
		});
});

router.post('/', (req, res) => {
	const schemeData = req.body;

	Schemes.add(schemeData)
		.then((scheme) => {
			res.status(201).json(scheme);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to create new scheme' });
		});
});

router.post('/:id/steps', (req, res) => {
	const stepData = req.body;
	const { id } = req.params;

	Schemes.findById(id)
		.then((scheme) => {
			if (scheme) {
				Schemes.addStep(stepData, id).then((step) => {
					res.status(201).json(step);
				});
			} else {
				res
					.status(404)
					.json({ message: 'Could not find scheme with given id.' });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to create new step' });
		});
});

router.put('/:id', (req, res) => {
	const { id } = req.params;
	const changes = req.body;

	Schemes.findById(id)
		.then((scheme) => {
			if (scheme) {
				Schemes.update(id, changes).then((updatedScheme) => {
					res.json(updatedScheme);
				});
			} else {
				res
					.status(404)
					.json({ message: 'Could not find scheme with given id' });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to update scheme' });
		});
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;
	Schemes.findById(id)
		.then((scheme) => {
			scheme
				? Schemes.remove(id).then((deleted) => {
						deleted
							? res
									.status(200)
									.json({
										success: `Account with ID ${id} has been removed`,
										info: scheme,
									})
							: res.status(400).json({ message: 'That scheme does not exist' });
				  })
				: null;
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to delete scheme' });
		});
});

module.exports = router;
