// const Sequelize = require('sequelize');
// const DataTypes = Sequelize.DataTypes;
// const database = require('../database');


// //console.log("hello",database.sequelize);

// const Customer = database.sequelize.define('user', {
//   id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   role:{
//     type: DataTypes.STRING,
//     allowNull:false
//   }
// });

// module.exports = Customer;

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user', {
     id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role:{
      type: DataTypes.STRING,
      allowNull:false
    }
  });
};

