const express = require('express')
var fs = require('fs');

const app = express()

//log in standard output
console.log("Our application is launching!");

//we define a entrypoint on '/'. When a get is performed on '/', we log "youpi" and send the response
app.get('/', function (req, res) {
  console.log("youpi");
  //send the response
  res.send("Hello you!");
})

//we launch the webserver on port 3000 and log when it's up
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})



var mysql = require('mysql');

// Create a mysql connection object
var con = mysql.createConnection({
//  host: "tutodocker-mysql",
//  user: "root",
//  password: "root",
//  database: "workshop"
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

var users;

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM workshop.USERS", function (err, result, fields) {
    if (err) throw err;
    users = result;
    console.log(result);
  });
});


app.get('/users', function (req, res) {
  //send users value as the response
  res.send(users);
})
 



