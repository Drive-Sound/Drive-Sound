const express = require('express');
const aboutus = express.Router()
const path = require("path")
aboutus.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, '/../views/About_Us_Page.html'))
})
module.exports = aboutus;