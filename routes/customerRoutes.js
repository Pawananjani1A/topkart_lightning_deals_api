const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');
const authMiddleware = require('../middlewares/auth');

// Use the auth middleware to verify the JWT token and retrieve the user information
router.use(authMiddleware);

router.get('/deals', customerController.getAvailableDeals);
router.post('/orders', customerController.placeOrder);
router.get('/orders/:id', customerController.getOrderStatus);

module.exports = router;