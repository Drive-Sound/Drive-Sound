const express = require('express');
const adminRouter = require('../js/admin')
const admin = express.Router()
const path = require("path")
admin.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/../views/AdminMusic.html'))
    admin.use(adminRouter);
})

module.exports = admin;