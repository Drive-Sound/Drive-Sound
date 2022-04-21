const express = require('express');
const account = express.Router()
const path = require("path")
account.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, '/../views/Account.html'))
})

module.exports = account;