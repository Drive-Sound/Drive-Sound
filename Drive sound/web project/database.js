const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();
const dbConnection = mysql.createPool({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
}).promise();


dbConnection.getConnection(function(err, connection) {
    // connected! (unless `err` is set)
  });


module.exports = dbConnection;