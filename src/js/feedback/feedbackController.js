const service = require('./feedbackService');
const to = require('../to/to');
const {check, validationResult} = require('express-validator');

exports.validations = [
    check('name').isLength({min: 1}).trim(),
    check('directorate').isLength({min: 1}).trim(),
    check('feedback').isLength({min: 1}).trim(),
]

exports.get = function(req, res) {
    return res.render('feedback');
};

exports.post = async function(req, res) {
    let result = await validate(req);

    if (!result.isEmpty()) {
        return res.render('feedback', {
            name: req.body.name,
            directorate: req.body.directorate,
            feedback: req.body.feedback,
            errors: result.array()
        });
    }

    let err, feedback;

    [err, feedback] = await to(service.create(req.body.name, req.body.directorate, req.body.feedback));

    if (err) {
        console.error(err);
        return res.redirect('/oops');
    }

    return res.redirect('/success');
};

async function validate(req) {
    return await validationResult(req);
}