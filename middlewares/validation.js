const { body, validationResult } = require('express-validator');

// Signup validation rules
exports.validateSignup = [
  body('email', 'Invalid email').isEmail(),
  body('password', 'Password must be at least 6 characters long').isLength({ min: 6 }),
  body('role', 'Role must be either "customer" or "admin"').isIn(['customer', 'admin'])
];

// Login validation rules
exports.validateLogin = [
  body('email', 'Invalid email').isEmail(),
  body('password', 'Password must be at least 6 characters long').isLength({ min: 6 })
];

// Middleware to handle validation errors
exports.validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array()[0].msg });
  }
  next();
};
