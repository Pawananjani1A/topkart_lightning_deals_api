const { sequelize } = require('../database');
const { DataTypes } = require('sequelize');
const User = require('../models/user')(sequelize,DataTypes);
const Order = require('../models/order')(sequelize,DataTypes);
const LightningDeal = require('../models/lightningDeal')(sequelize,DataTypes);

const createLightningDeal = async (req, res) => {
  try {

     const {role} = req.user;
     if(role && role!='admin'){
      res.status(403).json({message:'Authorization falied!!Only Admins can create deals.'});
     }
    const { product_name, actual_price, final_price, total_units, expiry_time } = req.body;

    const lightningDeal = await LightningDeal.create({
      product_name,
      actual_price,
      final_price,
      total_units,
      available_units: total_units,
      expiry_time
    });

    res.status(201).json(lightningDeal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateLightningDeal = async (req, res) => {
  try {
    const {role} = req.user;
     if(role && role!='admin'){
      res.status(403).json({message:'Authorization falied!!Only Admins can update deals.'});
     }

    const { id } = req.params;
    const { product_name, actual_price, final_price, total_units,available_units, expiry_time } = req.body;

    const lightningDeal = await LightningDeal.findByPk(id);

    if (!lightningDeal) {
      return res.status(404).json({ error: 'Lightning deal not found' });
    }

    lightningDeal.product_name = product_name;
    lightningDeal.actual_price = actual_price;
    lightningDeal.final_price = final_price;
    lightningDeal.total_units = total_units;
    lightningDeal.available_units = available_units;
    lightningDeal.expiry_time = expiry_time;

    await lightningDeal.save();

    res.json(lightningDeal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const approveOrder = async (req, res) => {
  try {

    const {role} = req.user;
     if(role && role!='admin'){
      res.status(403).json({message:'Authorization falied!!Only Admins can approve orders.'});
     }
    const { id } = req.params;

    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    order.order_status = 'Approved';

    await order.save();

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
    createLightningDeal,
    updateLightningDeal,
    approveOrder
};
