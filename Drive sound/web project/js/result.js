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
router.post('/next',function(req,res){
    const id = req.body.id;
    
    var sql = "SELECT * FROM song_info Where song_id ="+id;
    db.query(sql,function(err,data, fields){
        if (err) throw res.send(`Error not found`)
            return res.send(data);
    })

})
router.put('/count',function(req,res){
    const id = req.body.id;
    const count = req.body.count;
    
    var sql = "UPDATE song_info SET song_count_join = '"+count+"'Where song_id ="+id;
    db.query(sql,function(err,data, fields){
        if (err) throw res.send(`Error not found`)
            return res.send(data);
    })

})

router.post('/checklike',function(req,res){
    const id = req.body.id;
    const user_id = req.body.user_id;
    console.log(id + " " + user_id)
    var sql = "SELECT * FROM user_like Where userid = "+user_id+" AND songid = "+id;
    db.query(sql,function(err,data, fields){
        if (err) throw res.send(`Error not found`)
            return res.send(data);
    })
})
router.post('/checklistened',function(req,res){
    const id = req.body.id;
    const user_id = req.body.user_id;
    console.log(id + " " + user_id)
    var sql = "SELECT * FROM user_listened Where userid = "+user_id+" AND songid = "+id;
    db.query(sql,function(err,data, fields){
        if (err) throw res.send(`Error not found`)
            return res.send(data);
    })
})
router.post('/checklistenlater',function(req,res){
    const id = req.body.id;
    const user_id = req.body.user_id;
    console.log(id + " " + user_id)
    var sql = "SELECT * FROM user_listen_later Where userid = "+user_id+" AND songid = "+id;
    db.query(sql,function(err,data, fields){
        if (err) throw res.send(`Error not found`)
            return res.send(data);
    })
})

router.post('/addlike',function(req,res){
    const id = req.body.id;
    const user_id = req.body.user_id;
    
    var sql = "INSERT INTO user_like (userid, songid) VALUES ('"+user_id+"','"+id+"')";
    db.query(sql,function(err,data, fields){
        if (err) 
            return res.send(data);
    })

})
router.post('/addlistened',function(req,res){
    const id = req.body.id;
    const user_id = req.body.user_id;
    
    var sql = "INSERT INTO user_listened (userid, songid) VALUES ('"+user_id+"','"+id+"')";
    db.query(sql,function(err,data, fields){
        if (err) 
            return res.send(data);
    })

})
router.post('/addlistenlater',function(req,res){
    const id = req.body.id;
    const user_id = req.body.user_id;
    
    var sql = "INSERT INTO user_listen_later (userid, songid) VALUES ('"+user_id+"','"+id+"')";
    db.query(sql,function(err,data, fields){
        if (err) 
            return res.send(data);
    })

})
router.delete('/deletelike',function(req,res){
    const id = req.body.id;
    const user_id = req.body.user_id;
    
    var sql = "DELETE FROM user_like WHERE userid = '"+user_id+"' AND songid = '"+id+"'";
    db.query(sql,function(err,data, fields){
        if (err) throw res.send(`Error not found`)
            return res.send(data);
    })

})
router.delete('/deletelistened',function(req,res){
    const id = req.body.id;
    const user_id = req.body.user_id;
    
    var sql = "DELETE FROM user_listened WHERE userid = '"+user_id+"' AND songid = '"+id+"'";
    db.query(sql,function(err,data, fields){
        if (err) throw res.send(`Error not found`)
            return res.send(data);
    })

})
router.delete('/deletelistenlater',function(req,res){
    const id = req.body.id;
    const user_id = req.body.user_id;
    
    var sql = "DELETE FROM user_listen_later WHERE userid = '"+user_id+"' AND songid = '"+id+"'";
    db.query(sql,function(err,data, fields){
        if (err) throw res.send(`Error not found`)
            return res.send(data);
    })

})

module.exports = app;


