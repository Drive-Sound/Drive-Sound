const express = require('express');
const result = require('../js/result')
const Result = express.Router()
const path = require("path")

Result.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, '/../views/Result_Page.html'))
    Result.use(result);
})

module.exports = Result;