var express = require('express');
const loginRouter = express.Router();
const db = require('../models/index');
const { DataTypes } = require('sequelize');
const jwt = require("jsonwebtoken");
const Users = require('../models/user');

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

//Router
loginRouter.route('/login')
    .post(async (req, res) => {
        const { username, password } = req.body;

        console.log('key value',accessTokenSecret);
        const user = await Users(db.sequelize, DataTypes)
            .findOne({
                where: {
                    user_name: username,
                    user_password: password
                }
            });

        if(user === null){
            res.send("Username or password incorrect");
        }else{ 
            const accessToken = await jwt.sign({username: user.user_name, role: user.user_role},accessTokenSecret);
            res.json({accessToken});          
        }
       
    });
   
module.exports = loginRouter;