const express = require("express");
const {
  checkSchemeId,
  validateScheme,
  validateStep,
} = require("./scheme-middleware");
const Schemes = require("./scheme-model.js");

const router = express.Router();

router.get("/", (req, res, next) => {
  Schemes.find()
    .then((schemes) => {
      res.json(schemes);
    })
    .catch(next);
});

router.get("/:scheme_id", checkSchemeId, (req, res, next) => {
  const { scheme_id } = req.params;

  Schemes.findById(scheme_id)
    .then((scheme) => {
      res.json(scheme);
    })
    .catch(next);
});

router.get("/:scheme_id/steps", checkSchemeId, (req, res, next) => {
  const { scheme_id } = req.params;

  Schemes.findSteps(scheme_id)
    .then((steps) => {
      res.json(steps);
    })
    .catch(next);
});

router.post("/", validateScheme, (req, res, next) => {
  const scheme = req.body;

  Schemes.add(scheme)
    .then((scheme) => {
      res.status(201).json(scheme);
    })
    .catch(next);
});

router.post(
  "/:scheme_id/steps",
  checkSchemeId,
  validateStep,
  (req, res, next) => {
    const step = req.body;
    const { scheme_id } = req.params;

    Schemes.addStep(scheme_id, step)
      .then((allSteps) => {
        res.status(201).json(allSteps);
      })
      .catch(next);
  }
);

// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(err.status || 500).json({
    sageAdvice: "Finding the real error is 90% of the bug fix",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
