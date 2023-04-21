const Sequelize = require('sequelize');
// const DataTypes = Sequelize.DataTypes;
// const database = require('../database');
// database.initialize();


// const LightningDeal = database.sequelize.define('lightning_deal', {
//   product_name: {
//     type: Sequelize.STRING,
//     allowNull: false,
// },

//     expiry_time: {
// type: Sequelize.DATE,
// allowNull: false
// },
// actual_price: {
// type: Sequelize.DECIMAL(10, 2),
// allowNull: false
// },
// final_price: {
// type: Sequelize.DECIMAL(10, 2),
// allowNull: false
// },
// total_units: {
// type: Sequelize.INTEGER,
// allowNull: false
// },
// available_units: {
// type: Sequelize.INTEGER,
// allowNull: false
// }

// });

// module.exports = LightningDeal;


module.exports = (sequelize,DataTypes)=>{
  return sequelize.define('lightning_deal', {
  product_name: {
    type: Sequelize.STRING,
    allowNull: false,
},

    expiry_time: {
type: Sequelize.DATE,
allowNull: false
},
actual_price: {
type: Sequelize.DECIMAL(10, 2),
allowNull: false
},
final_price: {
type: Sequelize.DECIMAL(10, 2),
allowNull: false
},
total_units: {
type: Sequelize.INTEGER,
allowNull: false
},
available_units: {
type: Sequelize.INTEGER,
allowNull: false
}

});
};