const express = require('express'),
 bodyParser = require('body-parser'),
 app= express(),
 dotenv = require('dotenv'),
 path = require("path"),
 port = 8888;
 dotenv.config();


app.use(express.static(path.join(__dirname, '/')));

app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/image',express.static(__dirname + 'public/images'))


app.set('../views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const starter = require('./routers/starter-router');
const login = require('./routers/login-router');
const home = require('./routers/home-router');
const search = require('./routers/search-router');
const result = require('./routers/result-router');
const datalist = require('./routers/datalist-router');
const account = require('./routers/account-router');
const aboutus = require('./routers/aboutus-router');
const admin = require('./routers/admin-router');
const adminmusic = require('./routers/admin-music-router');

app.use('/Starter', starter);
app.use('/Home', home);
app.use('/Login', login);
app.use('/Search', search);
app.use('/Result', result);
app.use('/List', datalist);
app.use('/Account', account);
app.use('/About_Us', aboutus);
app.use('/Admin', admin);
app.use('/Adminmusic', adminmusic);

app.listen(8888, () =>{
    console.log(`Server listen on port ${port}`)
})