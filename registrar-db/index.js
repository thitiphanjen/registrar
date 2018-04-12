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
        res.send('your username does not exist');
    }else if(rows[0].passwords != password){
        res.send('your password is wrong');
    }else if(rows[0].passwords === password){
        res.send('Hello ' + rows[0].fname + ' ' + rows[0].lname);
    }
  })
});


app.listen(3300);