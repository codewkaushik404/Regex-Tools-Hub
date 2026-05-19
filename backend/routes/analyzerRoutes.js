const express = require('express');
const {analyzePassword, analyzeLogFile } = require('../controllers/analyzerController');

const router = express.Router();

router.post('/password-check', analyzePassword);
router.post('/log-analyzer', analyzeLogFile);

module.exports = router;