var mysql = require("mysql");


var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "root",
  database: "burgers_db"
});


//Callback function --- After mysql connects it it runs the function
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack)
  }
  console.log("connected as id " + connection.threadId);
 

});

module.exports = connection;