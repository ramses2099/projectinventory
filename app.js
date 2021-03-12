const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const db = require('./models/index');
const { DataTypes } =require('sequelize');

const http = require('http');
const app = express();
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const Users = require('./models/user');

app.get('*', (req, res) =>{ 

    Users(db.sequelize, DataTypes)
    .findAll()
    .then((users)=>{
        res.status(200).send(users);
    });
    
});


const PORT = parseInt(process.env.PORT, 10) || 4000;
app.set('PORT', PORT);
const server = http.createServer(app);

server.listen(PORT, () => {
    db.sequelize.authenticate().then(() => {
        console.log('connect to db inventory_db');
    });
    //
    console.log(`Server running in http://localhost:${PORT}`);

});

module.exports = app;