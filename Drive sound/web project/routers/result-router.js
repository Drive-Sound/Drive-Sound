const express = require('express');
const result = express.Router()
const path = require("path")
result.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, '/../views/Result.html'))
})
module.exports = result;