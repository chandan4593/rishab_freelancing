const express = require('express');
const router = express.Router();

const userController = require('../Controllers/userController');
const authController = require('../Controllers/authController');

router.post("/userSignIn", authController.postUserSingIn);

router.post("/userLogIn", authController.postUserLoginIn);

router.post("/farmerSignIn", authController.postFarmerSingIn);

router.post("/farmerLogIn", authController.postFarmerLogIn);

router.post("/postDeliveryBoyLogIn", authController.postDeliveryBoyLogIn);

router.get('/', userController.welcomePage);

module.exports = router;