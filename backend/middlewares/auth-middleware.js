const jwt = require('jsonwebtoken');
const UserModel = require('../models/User.js');

var checkUserAuth = async (req, res, next) => {
    let token
    const { authorization } = req.headers
    if (authorization && authorization.startsWith('Bearer')) {
      try {
        // Get Token from header
        token = authorization.split(' ')[1]
        
        // console.log("Authorization", authorization)

        // Verify Token
        const { userID } = jwt.verify(token, process.env.JWT_SECRET_KEY)
        // console.log(userID)
  
        // Get User from Token
        req.user = await UserModel.findById(userID).select('-password')
        // console.log(req.user)
        next()
      } catch (error) {
        console.log(error)
        res.status(401).send({ "status": "failed", "message": "Unauthorized User" })
      }
    }
    if (!token) {
      res.status(401).send({ "status": "failed", "message": "Unauthorized User, No Token" })
    }
  }
module.exports = checkUserAuth;