const schemeModel = require("./scheme-model-new");

const findAll = () => schemeModel.findAll();

const findById = id => schemeModel.findById(id);

const findSteps = schemeId => {};

const addStep = (step, schemeId) => {
    return schemeModel.findById(schemeId)
        .then(scheme => {
            if (!scheme) {
                throw {
                    status: 404,
                    details: "Could not find scheme with given id."
                }
            } else return {
                scheme_id,
                step_number: step.step_number,
                instructions: step.instructions
            };
        })
        .then( newStep => schemeModel.addStep(newStep, id) )
        .then( ids => schemeModel.findById(ids[0]) )
        .catch(err => { throw err });
};

const add = newScheme => {};

const update = (changes, id) => {};

const remove = id => {};

module.exports = {
  findAll,
  findById,
  findSteps,
  addStep,
  add,
  update,
  remove
};
