require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database');
const customerRoutes = require('./routes/customerRoutes');
const lightningDealRoutes = require('./routes/lightningDealRoutes');
const adminRoutes = require('./routes/adminRoutes');
const authRoutes = require('./routes/auth');


// database.initialize();

const app = express();

app.use(bodyParser.json());

app.use('/auth',authRoutes);

app.use('/customer', customerRoutes);
app.use('/lightning_deals', lightningDealRoutes);
app.use('/admin', adminRoutes);

const PORT = process.env.PORT || 3000;

database.sequelize.sync()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(error => {
    console.error('Unable to connect to the database:', error);
  });
