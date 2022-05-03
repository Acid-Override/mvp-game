var router = require('./routes.js');
const express = require ('express');
const path = require("path");
require('dotenv').config();
const morgan = require("morgan")
const db = require('../database').connection


const app = express();

//middleware

app.use(express.static(path.join(__dirname, '../client/src')));
//app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(express.json());
app.use(express.static('client/dist'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

const PORT = process.env.PORT || 3000;

app.use('/', router);


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})