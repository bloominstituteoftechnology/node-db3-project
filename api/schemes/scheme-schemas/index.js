const yup = require('yup');

const schemeSchema = yup.object().shape({
scheme_name: yup
.string()
.typeError('invalid scheme_name')
.required('invalid scheme_name')
.min(1, 'invalid scheme_name')
});

const stepSchema = yup.object().shape({
    instructions: yup
    .string()
    .typeError('invalid step')
    .required('invalid step')
    .min(1, 'invalid step'),
    step_number: yup
    .number()
    .typeError('invalid step')
    .required('invalid step')
    .integer('invalid step')
    .moreThan(0,'invalid step')
});

module.exports = {
    schemeSchema,
    stepSchema
};