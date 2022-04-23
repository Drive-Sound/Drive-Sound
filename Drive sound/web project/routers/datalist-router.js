const express = require('express');
const listRouter = require('../js/list')
const datalist = express.Router()
const path = require("path")
datalist.get('/',(req,res) => {
    res.render(__dirname + '/../views/data_list.ejs')
    datalist.use(listRouter);
})

module.exports = datalist;