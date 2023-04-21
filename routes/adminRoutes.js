const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middlewares/auth');

// Use the auth middleware to verify the JWT token and retrieve the user information
router.use(authMiddleware);

router.post('/create_deal', adminController.createLightningDeal);
router.put('/deals/:id', adminController.updateLightningDeal);
router.put('/orders/:id/approve', adminController.approveOrder);

module.exports = router;
