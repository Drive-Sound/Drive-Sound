const express = require('express');
const searchRouter = require('../search_function')
const search = express.Router()
const path = require("path")
search.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, '/../views/Search_Page.html'))
    search.use(searchRouter);
})

module.exports = search;