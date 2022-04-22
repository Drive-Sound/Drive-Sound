const express = require('express');
const datalist = express.Router()
const path = require("path")
datalist.get('/',(req,res) => {
    res.render(__dirname + '/../views/data_list.ejs')
})

module.exports = datalist;