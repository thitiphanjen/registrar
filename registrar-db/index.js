var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Siwakorn1997',
  database : 'registrar'
});
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login',function (req,res) {
  var username = req.body.username;
  var password = req.body.password;
  connection.query('select * from student where studentID = ' + username, function(err,rows,fields){
    if(rows[0] == null){
      res.json({
        studentID: null
      })
    }else if(rows[0].passwords != password){
      res.json({
        studentID: null
      })
    }else if(rows[0].passwords === password){
      res.json({
        studentID: username
      })
    }
  })
});


app.listen(3300);