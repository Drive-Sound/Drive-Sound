const express = require('express');
const home = express.Router()
const listRouter = require('../js/list')
const searchRouter = require('../js/search_function')
const app = express();
const path = require("path")



home.get('/',(req,res) => {
    res.render(__dirname + '/../views/home.ejs')
    home.use(listRouter);
})


module.exports = home;