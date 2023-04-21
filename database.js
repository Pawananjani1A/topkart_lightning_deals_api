require('dotenv').config();
const Sequelize = require('sequelize');


let sequelize = null;

async function initialize() {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || 'mysql',
    logging: false
  });

  try{
      await sequelize.authenticate();
      console.log('Authenticated');
  }catch(err){
    console.error('Unable to connect to the database:', err);
  }
  
  const Customer = require('./models/user')(sequelize, Sequelize);
  const LightningDeal = require('./models/lightningDeal')(sequelize, Sequelize);
  const Order = require('./models/order')(sequelize, Sequelize);

  Customer.hasMany(Order);
  Order.belongsTo(Customer);
  LightningDeal.hasMany(Order);
  Order.belongsTo(LightningDeal);


  try {
     await sequelize.sync();
  } catch (err) {
    console.error('Unable to synchronize the database:', err);
  }

//   return sequelize;
}


initialize();


module.exports = {
    initialize,
    sequelize
};

