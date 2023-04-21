const Sequelize = require('sequelize');
// const DataTypes = Sequelize.DataTypes;
// const database = require('../database');
// const { sequelize } = require('.');
// database.initialize();



// const Order = database.sequelize.define('order', {
//   lightning_deal_id: {
//     type: Sequelize.INTEGER,
//     allowNull: false
//   },
//   user_id: {
//     type: Sequelize.INTEGER,
//     allowNull: false
//   },
//   quantity: {
//     type: Sequelize.INTEGER,
//     allowNull: false
//   },
//   order_status: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }
// });

// module.exports = Order;

module.exports = (sequelize,DataTypes)=>{
  return sequelize.define('order', {
  lightning_deal_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  order_status: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
};