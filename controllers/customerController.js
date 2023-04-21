const { sequelize } = require('../database');
const {Sequelize, DataTypes } = require('sequelize');
const Order = require('../models/order')(sequelize,DataTypes);
const LightningDeal = require('../models/lightningDeal')(sequelize,DataTypes);

const getAvailableDeals = async (req, res) => {
  try {
    const currentTime = new Date().getTime();

    const deals = await LightningDeal.findAll({
      where: {
        available_units: {
          [Sequelize.Op.gt]: 0
        },
        expiry_time: {
          [Sequelize.Op.gt]: currentTime
        }
      }
    });

    res.json(deals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const placeOrder = async (req, res) => {
  try {
    const { lightning_deal_id, user_id, quantity } = req.body;

    const lightningDeal = await LightningDeal.findByPk(lightning_deal_id);

    if (!lightningDeal) {
      return res.status(404).json({ error: 'Lightning deal not found' });
    }

    if (lightningDeal.available_units < quantity) {
      return res.status(400).json({ error: 'Insufficient units available for the lightning deal' });
    }

    const order = await Order.create({
      lightning_deal_id,
      user_id,
      quantity,
      order_status: 'Pending'
    });

    lightningDeal.available_units -= quantity;
    await lightningDeal.save();

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAvailableDeals,
  placeOrder,
  getOrderStatus
};
