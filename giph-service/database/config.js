const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'database',
  user: 'root',
  password: 'mysqlpwd',
  database: 'eaze',
  port: '3306',
});

db.connect();

module.exports = db;
