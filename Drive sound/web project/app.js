const express = require('express'),
 bodyParser = require('body-parser'),
 app= express(),
 dotenv = require('dotenv'),
 http = require('http'),
 path = require("path"),
 port = 8888;
 searchRouter = require('./search_function')
 loginrouter = require('./login')
 db = require('./sql');
 dotenv.config();


app.use(express.static(path.join(__dirname, '/')));

app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/image',express.static(__dirname + 'public/images'))


app.set('../views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/views/StarterrPage.html')
})
app.get('/Home',(req,res) => {
    res.render(__dirname + '/views/HomePage.ejs')
})
app.get('/Search',(req,res) => {
    res.sendFile(__dirname + '/views/Search_Page.html')
    app.use(searchRouter);
})
app.get('/Result',(req,res) => {
    res.sendFile(__dirname + '/views/Result_Page.html')
})
app.get('/Account',(req,res) => {
    res.sendFile(__dirname + '/views/Account.html')
})
app.get('/About_Us',(req,res) => {
    res.sendFile(__dirname + '/views/About_Us_Page.html')
})
app.get('/Login',(req,res) => {
    res.render(__dirname + '/views/login-register.ejs')
    app.use(loginrouter);
})
// app.listen(8888, () =>{
//     console.log(`Server listen on port ${port}`)
// })