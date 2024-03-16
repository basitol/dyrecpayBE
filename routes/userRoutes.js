const express = require('express');
const router = express.Router();
const {
  joinWaitlist,
  getAllUsersOnWaitlist,
} = require('../controllers/userController');

router.route('/waitlist').post(joinWaitlist).get(getAllUsersOnWaitlist);

module.exports = router;
