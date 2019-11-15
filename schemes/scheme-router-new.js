const express = require("express");

const Schemes = require("./scheme-model.js");
const schemeService = require("./scheme-service.js");

const router = express.Router();

//==================MIDDLEWARE=====================//
const bodyValidator = (req, res, next) => {
  if (!req.body || !Object.keys(req.body).length) {
    next({ status: 400, details: "Please provide a body with your request." });
  } else next();
};

const schemeValidator = (req, res, next) => {
  const { scheme_name } = req.body;
  if (!scheme_name || typeof scheme_name !== "string") {
    next({
      status: 400,
      details: "You must provide a scheme_name",
      devMessage: "scheme_name must be a 'string'."
    });
  } else {
    res.locals.scheme = {scheme_name};
    next();
  }
};

const stepValidator = (req, res, next) => {
  const { step_number, instructions } = req.body;
  const missing = [];
  if (!step_number || isNaN(step_number)) {
    missing.push({param: "step_number", type: "number"})
  }
  if (!instructions || typeof instructions !== "string") {
    missing.push({param: "instructions", type: "string"})
  }

  if (missing.length) next({status:400, details:"You're missing some bits to your body!", params: missing});
  else {
    res.locals.step = { step_number, instructions }
    next();
  }
}

// GET all schemes
router.get("/", (req, res, next) => {
  schemeService
    .findAll()
    .then(schemes => res.json(schemes))
    .catch(err => next(err));
});

// GET scheme by id
router.get("/:id", (req, res, next) => {
  schemeService
    .findById(req.params.id)
    .then(scheme => res.json(scheme))
    .catch(err => next(err));
});

// GET steps by scheme_id
router.get("/:id/steps", (req, res, next) => {
  schemeService
    .findSteps(req.params.id)
    .then(steps => res.json(steps))
    .catch(err => next(err));
});

// POST a new scheme
router.post("/", bodyValidator, schemeValidator, (req, res, next) => {
  schemeService
    .add(res.locals.scheme)
    .then(scheme => res.status(201).json(scheme))
    .catch(err => next(err));
});


// POST a new step
router.post("/:id/steps", bodyValidator, stepValidator, (req, res, next) => {
  schemeService
    .addStep(res.locals.step, req.params.id)
    .then(resp => res.status(201).json(resp))
    .catch(err => next(err));
});

// PUT an existing scheme
router.put("/:id", bodyValidator, schemeValidator, (req, res, next) => {
  schemeService
    .update(res.locals.scheme, req.params.id)
    .then(updatedScheme => res.json(updatedScheme))
    .catch(err => next(err));
});

// DELETE an existing scheme
router.delete("/:id", (req, res, next) => {
  schemeService
    .remove(req.params.id)
    .then(deleted => res.json({ removed: deleted }))
    .catch(err => next(err));
});

module.exports = router;
