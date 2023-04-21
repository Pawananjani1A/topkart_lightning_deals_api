require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { sequelize } = require('../database');
const { DataTypes } = require('sequelize');
const User = require('../models/user')(sequelize,DataTypes);
const { validateSignup, validateLogin } = require('../middlewares/validation');

// Signup route
router.post('/signup', validateSignup, async (req, res) => {
  try {
    // Check if the email already exists in the database
const existingUser = await User.findOne({ where: { email: req.body.email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    
    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
 
    // Create a new user in the database
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      role: req.body.role
    });

    // console.log('Checking',newUser);
    const savedUser = await newUser.save();

    

    // Generate a JWT token for the user
    const token = jwt.sign({ id: savedUser._id, email: savedUser.email, role: savedUser.role }, process.env.JWT_SECRET);
    
    return res.status(201).json({ message: 'User created', token });
  } catch (err) {
    return res.status(500).json({ message: 'Internal server error',error:err });
  }
});

// Login route
router.post('/login', validateLogin, async (req, res) => {
  try {
    // Check if the email exists in the database
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare the password with the stored hash using bcrypt
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate a JWT token for the user
    const token = jwt.sign({ id: user._id, email: user.email, role: user.role }, process.env.JWT_SECRET);

    return res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
