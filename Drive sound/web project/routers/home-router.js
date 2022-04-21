const express = require('express');
const home = express.Router()
const app = express();
const path = require("path")



home.get('/',(req,res) => {
    res.render(__dirname + '/../views/home.ejs')
})


module.exports = home;