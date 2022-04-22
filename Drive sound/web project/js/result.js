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
    const sname = req.body.sname_a;
    const sbrand = req.body.sbrand_a;
    const ssolo = req.body.ssolo_a;
    var sql;
    if(sbrand != "-"){
        sql = "SELECT * FROM song_info Where song_name LIKE '%"+sname+"%'AND song_brand LIKE '%"+sbrand+"%'";
        // sql = "UPDATE song_info SET song_count_join = "+song_count_join+1+" WHERE song_name = "+sname+" AND song_brand = "+sbrand;
    }else{
        sql = "SELECT * FROM song_info Where song_name LIKE '%"+sname+"%'AND song_solo_musician LIKE '%"+ssolo+"%'";
        // sql = "UPDATE song_info SET song_count_join = "+song_count_join+1+" WHERE song_name = "+sname+" AND song_solo_musician = "+ssolo;
    }
    db.query(sql,function(err,data, fields){
        if (err) throw res.send(`Error not found`)
            return res.send(data);
    })
})



module.exports = app;


