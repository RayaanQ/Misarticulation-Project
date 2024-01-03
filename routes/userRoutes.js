const express = require('express');
const router = express.Router();
const { getAllUsers, getSingleUser } = require('../controllers/user');
const auth = require('../middleware/authentication')

router.get('/leaderboard',auth, getAllUsers);
router.get('/profile/:id',auth, getSingleUser);

module.exports = router;