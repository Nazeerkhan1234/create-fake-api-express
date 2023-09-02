const express = require('express');
const { testController } = require('../../controller/testController');
const testRoute=express.Router();
testRoute.get('/orders',testController);
module.exports={testRoute:testRoute}