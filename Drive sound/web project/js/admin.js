var express = require('express');
const bodyParser = require('body-parser')
const mysql = require('mysql');
const admin = express()
var cors = require('cors')
const dotenv = require('dotenv');

dotenv.config();
const port = 6001;

admin.use(express.static('/'))
admin.use('public/css', express.static(__dirname + 'css'))
admin.use('public/image', express.static(__dirname + 'images'))

admin.use(bodyParser.urlencoded({ extended: false }))


admin.use(bodyParser.json())
    //MySQL
const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
});


admin.use(cors())

var allowlist = ['http://127.0.0.1:5501', 'http://example2.com']
var corsOptionsDelegate = function(req, callback) {
    var corsOptions;
    if (allowlist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
    } else {
        corsOptions = { origin: false } // disable CORS for this request
    }
    callback(null, corsOptions) // callback expects two parameters: error and options
}

//Get SELECT all User
// Testing SELECT all User
// method: GET
// URL: http://localhost:6001/
admin.get(`/`, cors(corsOptionsDelegate), (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err

        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * from  user_info', (err, rows) => {
            connection.release()

            if (!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
            console.log('The data from  user_info table are: \n', rows)
        })
    })
})

//Get SELECT all Music
// Testing SELECT all music
// method: GET
// URL: http://localhost:6001/music
admin.get(`/music`, cors(corsOptionsDelegate), (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err

        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * from  song_info', (err, rows) => {
            connection.release()

            if (!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
            console.log('The data from  song_info table are: \n', rows)
        })
    })
})

// SELECT user
// Testing SELECT User with Id
// method: GET
// URL: http://localhost:6001/a0002
admin.get(`/:user_id`, cors(corsOptionsDelegate), (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err

        console.log(`connected as id ${connection.threadId}`)
        const params = req.body

        connection.query('SELECT * from user_info WHERE user_id= ?', [req.params.user_id], (err, rows) => {
            connection.release()

            if (!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
})

//SELECT Music
// Testing SELECT music with Id
// method: GET
// URL: http://localhost:6001/music/1
admin.get(`/music/:song_id`, cors(corsOptionsDelegate), (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err

        console.log(`connected as id ${connection.threadId}`)
        const params = req.body

        connection.query('SELECT * from song_info WHERE song_id= ?', [req.params.song_id], (err, rows) => {
            connection.release()

            if (!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
})

//INSERT User
// Testing Insert a new user
// method: post
// URL: http://localhost:6001/insertUser
// body: raw JSON
// {
//       "user_id" : "u0089",
//       "user_username": "Jk",
//       "user_fname" : "Jake",
//       "user_lname" : "Songkarns",
//       "user_bdate": "1998-03-12",
//       "user_tel": "0812344332",
//       "user_bio":"Music is my life"
//   }
//   {
//       "user_id" : "u0099",
//       "user_username": "Sa",
//       "user_fname" : "Susan",
//       "user_lname" : "Linda",
//       "user_bdate": "1990-07-01",
//       "user_tel": "0984756777",
//       "user_bio":"I am susan and I like music"
//   }
admin.post(`/insertUser`, cors(corsOptionsDelegate), (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const params = req.body

        connection.query('INSERT INTO user_info SET ?', params, (err, rows) => {
            connection.release()

            if (!err) {
                res.send(`user_info with the Record ID: ${params.user_id} has been added.`)
            } else {
                console.log(err)
            }
        })
        console.log(req.body)
    })
})

//INSERT Music
// Testing Insert a new music
// method: post
// URL: http://localhost:6001/insertmusic
// body: raw JSON
// {
// "song_id" : "40",
// "song_name": "Leave the Door Open",
//  "song_produced_date" : "2021-03-05",
//  "song_rating" : "5",
//  "song_brand": "Bruno Mars",
//  "song_solo_musician": null,
//  "song_type_song":"pop",
//  "song_detail":"Leave the Door Open is the debut single by the American super-duo Silk Sonic, consisting of Bruno Mars and Anderson",
//  "song_chord" : null,
//  "song_lyric" : null,
//  "song_album" : "An Evening with Silk Sonic"
//   }
// {
// "song_id" : "41",
// "song_name": "Let Her Go",
//  "song_produced_date" : "2012-01-24",
//  "song_rating" : "5",
//  "song_brand": "Passenger",
//  "song_solo_musician": null,
//  "song_type_song":"Folk rock",
//  "song_detail":"Let Her Go is a song recorded by English singer-songwriter Passenger. It was recorded at Sydney's Linear Recording and co-produced by Mike Rosenberg (a.k.a. Passenger) and Chris Vallejo",
//  "song_chord" : null,
//  "song_lyric" : null,
//  "song_album" : "All the Little Lights"
//   }
admin.post(`/insertmusic`, cors(corsOptionsDelegate), (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const params = req.body

        connection.query('INSERT INTO song_info SET ?', params, (err, rows) => {
            connection.release()

            if (!err) {
                res.send(`song_info with the Record ID: ${params.song_id} has been added.`)
            } else {
                console.log(err)
            }
        })
        console.log(req.body)
    })
})

//DELETE User
// Testing delete User with Id
// method: DELETE
// URL: http://localhost:6001/a0002
admin.delete(`/:user_id`, cors(corsOptionsDelegate), (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const params = req.body

        connection.query('DELETE FROM user_info  WHERE user_id = ?', [req.params.user_id], (err, rows) => {
            connection.release()

            if (!err) {
                res.send(`user_info with the Record ID: ${params.user_id} has been Delete.`)
            } else {
                console.log(err)
            }
        })
    })
})


//DELETE Music
// Testing delete music with Id
// method: DELETE
// URL: http://localhost:6001/deletemusic/1
admin.delete(`/deletemusic/:song_id`, cors(corsOptionsDelegate), (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const params = req.body

        connection.query('DELETE FROM song_info  WHERE song_id = ?', [req.params.song_id], (err, rows) => {
            connection.release()

            if (!err) {
                res.send(`song_id with the Record ID: ${params.song_id} has been Delete.`)
            } else {
                console.log(err)
            }
        })
    })
})

//UPDATE User
// Testing update a user
// method: PUT
// URL: http://localhost:6001/updateuser
// body: raw JSON
// {
//       "user_id" : "u0129",
//       "user_username": "Jk",
//       "user_fname" : "Jake",
//       "user_lname" : "Songkarns"
//       "user_bdate": "1998-12-12",
//       "user_tel": "0812344332",
//       "user_bio":"Everybody wants to love It is easy when you try hard enough"
//   }
//   {
//       "user_id" : "u0130",
//       "user_username": "Sa",
//       "user_fname" : "Susan",
//       "user_lname" : "Linda"
//       "user_bdate": "1990-01-01",
//       "user_tel": "0984756777",
//       "user_bio":"Cause I still love you babe"
//   }
admin.put(`/updateuser`, (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const { user_id, user_username, user_fname, user_lname, user_bdate, user_tel, user_bio } = req.body

        connection.query('UPDATE user_info  SET user_username = ?, user_fname = ?, user_lname = ?, user_bdate = ?, user_tel = ?, user_bio = ? WHERE user_id = ?', [user_username, user_fname, user_lname, user_bdate, user_tel, user_bio, user_id], (err, rows) => {
            connection.release()

            if (!err) {
                res.send(`user_info  with the Record ID: ${user_id}  ${user_username} has been Update.`)
            } else {
                console.log(err)
            }
        })
    })
})

//UPDATE Music
// Testing Update a music
// method: PUT
// URL: http://localhost:6001/updatemusic
// body: raw JSON
// {
// "song_id" : "60",
// "song_name": "Leave the Door Open",
//  "song_produced_date" : "2021-03-05",
//  "song_rating" : "5",
//  "song_brand": "Bruno Mars",
//  "song_solo_musician": null,
//  "song_type_song":"pop",
//  "song_detail":"Leave the Door Open is the debut single by the American super-duo Silk Sonic, consisting of Bruno Mars and Anderson",
//  "song_chord" : null,
//  "song_lyric" : "What you doin'? (What you doin'?)
//   Where you at? (Where you at?)
//   Oh, you got plans? (You got plans?)
//   Don't say that (shut yo' trap)",
//  "song_album" : "An Evening with Silk Sonic"
//   }
// {
// "song_id" : "61",
// "song_name": "Let Her Go",
//  "song_produced_date" : "2012-01-24",
//  "song_rating" : "5",
//  "song_brand": "Passenger",
//  "song_solo_musician": null,
//  "song_type_song":"Folk rock",
//  "song_detail":"Let Her Go is a song recorded by English singer-songwriter Passenger. It was recorded at Sydney's Linear Recording and co-produced by Mike Rosenberg (a.k.a. Passenger) and Chris Vallejo",
//  "song_chord" : null,
//  "song_lyric" : "Well, you only need the light when it's burning low
//   Only miss the sun when it starts to snow
//   Only know you love her when you let her go
//   Only know you've been high when you're feeling low
//   Only hate the road when you're missing home
//   Only know you love her when you let her go
//   And you let her go",
//  "song_album" : "All the Little Lights"
//   }
admin.put(`/updatemusic`, (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const { song_id, song_name, song_produced_date, song_rating, song_brand, song_solo_musician, song_type_song, song_detail, song_chord, song_lyric, song_album } = req.body

        connection.query('UPDATE song_info  SET  song_name = ?, song_produced_date = ?, song_rating = ?, song_brand = ?, song_solo_musician = ?, song_type_song =?, song_detail = ?, song_chord = ?, song_lyric = ?, song_album = ?  WHERE song_id = ?', [song_name, song_produced_date, song_rating, song_brand, song_solo_musician, song_type_song, song_detail, song_chord, song_lyric, song_album, song_id], (err, rows) => {
            connection.release()

            if (!err) {
                res.send(`song_info with the Record ID: ${song_id}  ${song_name} has been Update.`)
            } else {
                console.log(err)
            }
        })
    })
})

admin.listen(port, () => console.log(`Listen on POST ${port}`))

module.exports = admin;