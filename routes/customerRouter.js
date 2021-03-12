var express = require('express');
const customerRouter = express.Router();
const db = require('../models/index');
const { DataTypes } = require('sequelize');
const authenticateToken = require('../authenticateToken');
const Customers = require('../models/customer');

//Router
customerRouter.route('/customer')
    .get(authenticateToken, async (req, res) => {       
       await Customers(db.sequelize, DataTypes)
            .findAll({}).then((custs) =>{
                res.json(custs);
            });      
       
    });
   
module.exports = customerRouter;