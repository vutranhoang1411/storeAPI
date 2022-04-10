const express = require('express');
const routes = express.Router();
const {getAllProduct}=require('../controllers/controllers');
routes.route('/').get(getAllProduct);

module.exports=routes;