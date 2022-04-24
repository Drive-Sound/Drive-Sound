const express = require('express');
const account = express.Router()
const accountRouter = require('../js/account')
const path = require("path")
account.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, '/../views/Account.html'))
    account.use(accountRouter);
})

module.exports = account;