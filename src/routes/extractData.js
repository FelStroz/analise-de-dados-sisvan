const express = require('express');
const router = express.Router();
const extract = require('../controller/extractData');

router.post('/', extract.extract);

module.exports = router;
