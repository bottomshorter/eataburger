// Set up MySQL connection.
const mysql = require("mysql");
require('dotenv').config({path: '../.env'});
let connection = null;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
  console.log("👍🏼You have conneted via JAWSDB..👍🏼")
} else {
  console.log("👍🏼You have conneted via localhost..👍🏼");
  connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "example123!",
    database: "burgers_db"
  });
}


// Make connection.
connection.connect(err => {
  if (err) {
    console.error("This has been an error: " + err.stack);
    return;
  }
  console.log("👍🏼You're connected on ThreadID #:" + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;