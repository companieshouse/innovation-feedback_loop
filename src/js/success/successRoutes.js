const express = require('express');
const router = express.Router();
const controller = require('./successController');

router.get('/', controller.get);

module.exports = router;