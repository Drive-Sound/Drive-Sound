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
    var type_data = req.body.type_data;
    var s_data = req.body.s_data;
    var sql;
    console.log('in sql'+type_data)
    if(type_data == 'all'){
        sql = "SELECT * FROM song_info ORDER BY song_inapp_date DESC";
    }else if(type_data == 'all-pop'){
        sql = "SELECT * FROM song_info ORDER BY song_count_join DESC";
    }else{
        console.log('in sql'+s_data)
        var sql = "SELECT * FROM song_info Where "+type_data+" = '"+s_data+"'";
    }
    
    db.query(sql,function(err,data, fields){
        if (err) throw res.send(`Error not found`)
            return res.send(data);
    })
})





module.exports = app;