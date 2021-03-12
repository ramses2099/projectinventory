const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
//temp
const db = require('./models/index');
const { DataTypes } =require('sequelize');
//temp

const  loginRouter = require('./routes/loginRouter');
const customerRouter = require('./routes/customerRouter');

const http = require('http');
const app = express();
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const Customers = require('./models/customer');

//routers
app.use('/api', loginRouter);
app.use('/api', customerRouter);


app.get('*', (req, res) =>{ 

    Customers(db.sequelize, DataTypes)
    .findAll({
        where:{
            id:1
        }
    })
    .then((customers)=>{
        res.status(200).send(customers);
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