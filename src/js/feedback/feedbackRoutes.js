const express = require('express');
const router = express.Router();
const controller = require('./feedbackController');

router.get('/', controller.get);
router.post('/', controller.validations, controller.post);

module.exports = router;