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


router.post('/search',function(req,res){
    const sname = req.body.search;
    var sql = "SELECT * FROM song_info Where song_name LIKE '%"+sname+"%'";
    db.query(sql,function(err,data, fields){
        if (err) throw res.send(`Error not found`)
            return res.send(data);
    })
})



module.exports = app;


