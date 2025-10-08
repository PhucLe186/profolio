const express = require('express');
const route = express.Router();

const FeedbackController = require('../app/controller/FeedbackController');

route.use('/send', FeedbackController.sendData);
route.use('/contact', FeedbackController.contact);
route.use('/', FeedbackController.fetchData);


module.exports = route;
