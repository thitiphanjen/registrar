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
    }else if(rows[0].passwords == password){
      res.json({
        studentID: username
      })
    }
  })
});

app.post('/courses',function (req,res) { 
  connection.query('select * from course inner join section on section.courseID = course.courseID inner join teacher on section.teacherID = teacher.teacherID;',function (err,rows,fields) { 
      res.json(rows)
   })
 })

 app.post('/courses/register',function (req,res) { 
    var studentID = req.body.studentID;
    var courseID = req.body.courseID;
    var sectionNumber = req.body.sectionNumber;
    var semester = req.body.semester;
    connection.query('insert into study value ("'+studentID+'","'+courseID+'","'+sectionNumber+'","'+semester+'",now(),0)',function (err,rows,fields) { 
      res.send(rows)
    })
 })


app.listen(3300);