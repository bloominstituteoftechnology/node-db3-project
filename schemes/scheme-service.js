const schemeModel = require("./scheme-model-new");

const findAll = () => schemeModel.find();

const findById = id => {
    return schemeModel.findById(id)
        .then(scheme => {
            if (!scheme) throw {status:404, details:"No Scheme found with this id."}
            else return scheme;
        });
}

const findSteps = schemeId => {
    return schemeModel.findSteps(schemeId)
        .then(schemes => {
            if (!schemes.length) throw {status:404, details:"No Steps found with this scheme id."}
            else return schemes;
        })
};

const addStep = (step, scheme_id) => {
    return schemeModel.findById(scheme_id)
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
        .then( newStep => schemeModel.addStep(newStep, scheme_id) )
        .then( ids => schemeModel.findSteps(scheme_id) )
};

const add = newScheme => {
    return schemeModel.findByName(newScheme.scheme_name)
        .then(scheme => {
            if (scheme) throw {status:400, details:"A scheme with this name already exists."}
            else return;
        })
        .then( () => schemeModel.add(newScheme) )
        .then( ids => schemeModel.findById(ids[0]) )
};

const update = (changes, id) => {
    return schemeModel.findByName(changes.scheme_name)
        .then(scheme => {
            if (scheme && scheme.id !== id) throw {status:400, details:"A scheme with this name already exists."}
            else return;
        })
        .then( () => schemeModel.update(changes, id) )
        .then(success => {
            if (!success) throw {status:404, details:"We could not find a scheme with this id."}
            else return;
        })
        .then( () => schemeModel.findById(id) )
};

const remove = id => {

    let deletedScheme; // Variable to eventually hold the scheme we will delete

    return schemeModel.findById(id)
        .then(scheme => {
            if (!scheme) throw {status:404, details: "We could not find a scheme with the given id."}
            else {
                deletedScheme = scheme;
                return;
            };
        })
        .then( () => schemeModel.remove(id) )
        .then( () => deletedScheme ) // scheme from line 65
};

module.exports = {
  findAll,
  findById,
  findSteps,
  addStep,
  add,
  update,
  remove
};
