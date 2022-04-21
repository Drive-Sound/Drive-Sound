const express = require('express');
const starter = express.Router()
const path = require("path")
starter.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, '/../views/StarterrPage.html'))
})
module.exports = starter;