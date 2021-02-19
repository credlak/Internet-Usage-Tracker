#!/usr/bin/env node
var mysql = require("mysql")

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "2252",
    database: "logs",
});

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
     connection.query("SELECT * FROM logs", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
});