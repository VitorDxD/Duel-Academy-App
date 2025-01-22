const express = require('express');
const router = express.Router();
const { getDuelists, getMe, createProfile } = require('../controllers/duelistController');

router.get('/', getDuelists);
router.get('/me', getMe);
router.post('/', createProfile)

module.exports = router;