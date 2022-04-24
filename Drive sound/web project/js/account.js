const express = require('express')
 bodyParser = require('body-parser'),
 app= express(),
 db = require('../database/js/sql'),
 router = express.Router();



app.use(express.static('/'))
app.use('public/css',express.static(__dirname + 'css'))
app.use('public/image',express.static(__dirname + 'images'))
 
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
 
app.use("",router);

router.post('/',function(req,res){
    const id = req.body.id;
    var sql = "Select * From `users_login` Where `id` ="+id;
    db.query(sql,function(err,data, fields){
        if (err) throw res.send(`Error not found`)
            return res.send(data);
    })
})
router.post('/like',function(req,res){
    const id = req.body.user_id;
    var sql = "Select * From user_like Where userid ="+id;
    db.query(sql,function(err,data, fields){
        if (err) throw res.send(`Error not found`)
            return res.send(data);
    })
})
router.post('/listened',function(req,res){
    const id = req.body.user_id;
    var sql = "Select * From user_listened Where userid ="+id;
    db.query(sql,function(err,data, fields){
        if (err) throw res.send(`Error not found`)
            return res.send(data);
    })
})
router.post('/listenlater',function(req,res){
    const id = req.body.user_id;
    var sql = "Select * From user_listen_later Where userid ="+id;
    db.query(sql,function(err,data, fields){
        if (err) throw res.send(`Error not found`)
            return res.send(data);
    })
})
router.post('/search',function(req,res){
    const id = req.body.song_id;
    var sql = "Select * From song_info Where song_id ="+id;
    db.query(sql,function(err,data, fields){
        if (err) throw res.send(`Error not found`)
            return res.send(data);
    })
})

module.exports = app;