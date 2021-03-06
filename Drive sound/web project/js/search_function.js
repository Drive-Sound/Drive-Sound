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
    const sname = req.body.search;
    const type = req.body.type_search;
    
    var sql;
    if(type == "name"){
        sql = "SELECT * FROM song_info Where song_name LIKE '%"+sname+"%'";
    }else if(type == "brand"){
        sql = "SELECT * FROM song_info Where song_brand LIKE '%"+sname+"%'";
    }else if(type == "solo"){
        sql = "SELECT * FROM song_info Where song_solo_musician LIKE '%"+sname+"%'";
    }else if(type == "song_photo"){
        sql = "SELECT * FROM song_info Where song_photo = '"+sname+"'";
    }else{
        sql = "SELECT * FROM song_info Where song_type_song LIKE '%"+sname+"%'";
    }
    
    db.query(sql,function(err,data, fields){
        if (err) throw res.send(`Error not found`)
            return res.send(data);
    })
})







module.exports = app;


