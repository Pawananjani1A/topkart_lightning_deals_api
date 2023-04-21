const { sequelize } = require('../database');
const { DataTypes } = require('sequelize');
const LightningDeal = require('../models/lightningDeal')(sequelize,DataTypes);

const getAllDeals = async (req, res) => {
  try {
  
    const deals = await LightningDeal.findAll();
    
    res.json(deals);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllDeals
};
