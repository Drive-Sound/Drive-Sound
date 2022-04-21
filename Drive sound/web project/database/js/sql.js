var mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();
const con = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

con.connect(function(err) {
  if (err) throw err;
      console.log("Database Connected");
  });

module.exports = con;

