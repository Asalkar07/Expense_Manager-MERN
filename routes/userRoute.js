const express = require("express");
const { loginController , registerController } = require('../controllers/userController')

// router object
const router = express.Router()

//routers
// Post || login user
router.post('/login',loginController)

// Post || Register User
router.post('/register' ,registerController)

module.exports =  router;