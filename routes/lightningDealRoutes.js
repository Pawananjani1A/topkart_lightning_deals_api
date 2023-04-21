const express = require('express');
const router = express.Router();
const lightningDealController = require('../controllers/lightningDealController');
const authMiddleware = require('../middlewares/auth');

// Use the auth middleware to verify the JWT token and retrieve the user information
router.use(authMiddleware);

router.get('/deals', lightningDealController.getAllDeals);

module.exports = router;
