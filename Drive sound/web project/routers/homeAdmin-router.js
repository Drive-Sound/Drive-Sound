const express = require('express');
const Adminhome = express.Router()
const app = express();
const path = require("path")



Adminhome.get('/',(req,res) => {
    res.render(__dirname + '/../views/home_admin.ejs')
})


module.exports = Adminhome;