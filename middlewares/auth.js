require('dotenv').config();
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Retrieve the JWT token from the Authorization header
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header is missing' });
  }
   
  // console.log(authHeader);
  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Token is missing' });
  }

  try {
    // Verify and decode the JWT token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    // Attach the user information to the request object
    req.user = {
      id: decodedToken.id,
      email: decodedToken.email,
      role: decodedToken.role
    };
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authMiddleware;
