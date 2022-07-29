var mysql = require("mysql");

var rdsUrl =
  "hotel-app-database-instance-1.cez1aa12qjds.us-east-2.rds.amazonaws.com";
var password = "admin123!";
var user = "admin";

// mysql connection pool
var rdsPool = mysql.createPool({
  connectionLimit: 12,
  host: rdsUrl,
  password: password,
  user: user,
});

module.exports.pool = rdsPool;
module.exports.url = rdsUrl;
