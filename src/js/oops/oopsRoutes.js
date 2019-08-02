const express = require('express');
const router = express.Router();
const controller = require('./oopsController');

router.get('/', controller.get);

module.exports = router;