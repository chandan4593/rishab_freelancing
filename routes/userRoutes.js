const express = require('express');
const router = express.Router();

const userController = require('../Controllers/userController');
const authController = require('../Controllers/authController');

router.post("/userSignIn", authController.postUserSingIn);

router.post("/userLogIn", authController.postUserLoginIn);

router.post("/farmerSignUp", authController.postFarmerSignUp);

router.post("/farmerLogIn", authController.postFarmerLogIn);

router.post("/postDeliveryBoyLogIn", authController.postDeliveryBoyLogIn);

router.get('/', userController.welcomePage);

router.post("/addfarmerpro",(req,res)=>{
    require("../Controllers/farmer").addfarmerpro(req,res);
});

router.post("/deletefarmerpro",(req,res)=>{
    require("../Controllers/farmer").deletefarmerpro(req,res);
});

router.post("/buyproduct",(req,res)=>{
    require("../Controllers/customers").buyproduct(req,res);
})

router.post("/pendingorders",(req,res)=>{
    require("../Controllers/delivery").pendingorders(req,res);
})

router.post("/acceptorder",(req,res)=>{
    require("../Controllers/delivery").acceptorder(req,res);
})

router.post("/pendingordersf",(req,res)=>{
    require("../Controllers/farmer").pendingorders(req,res);
})

router.post("/acceptordersf",(req,res)=>{
    require("../Controllers/farmer").acceptorders(req,res);
})

router.post("/pendingordersu",(req,res)=>{
    require("../Controllers/customers").pendingorders(req,res);
})

router.post("/acceptordersu",(req,res)=>{
    require("../Controllers/customers").acceptorders(req,res);
})

module.exports = router;