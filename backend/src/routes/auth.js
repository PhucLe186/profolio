const express = require('express');
const route = express.Router();

const authController = require('../app/controller/AuthController');

route.use('/login', authController.login);


module.exports = route;
