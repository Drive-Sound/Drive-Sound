const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();
const pool = mysql.createPool({
        connectionLimit: 10,
        host: process.env.host,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database,
    });


dbConnection.getConnection(function(err, connection) {
    console.log("Connect")
  });


module.exports = dbConnection;