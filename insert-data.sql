INSERT INTO student
VALUES ('5831069621','123456','Siwakorn','Luangcharoenpong',2015,1,0);
INSERT INTO student
VALUES ('5830503421','hello','Wichayut','Utarasak',2015,1,0);

INSERT INTO course(courseID,CourseName,credit)
VALUES ('2100111','EXPL ENG WORLD',3);
INSERT INTO course(courseID,CourseName,credit)
VALUES ('2100499','SENIOR PROJECT',2);
INSERT INTO course(courseID,CourseName,credit)
VALUES ('2100603','RES METH INSTR',3);

INSERT INTO faculty
VALUES (1,'Engineering');
INSERT INTO faculty
VALUES (2,'Accounting');
INSERT INTO faculty
VALUES (3,'Medicine');

INSERT INTO department
VALUES (1,'Computer Engineering',1);
INSERT INTO department
VALUES (2,'Electrical Engineering',1);
INSERT INTO department
VALUES (3,'Reverse Engineering',1);

INSERT INTO dormitory
VALUES (1,'Jumpa','M');
INSERT INTO dormitory
VALUES (2,'Jumpee','F');

INSERT INTO dormitoryRoom
VALUES (1,'2018/2','7015',4,7);
INSERT INTO dormitoryRoom
VALUES (1,'2018/2','7016',2,7);
INSERT INTO dormitoryRoom
VALUES (1,'2018/2','7017',4,7);

INSERT INTO teacher
VALUES ('1234567890123','Kunanon','Yuwapun',1,1,1);
INSERT INTO teacher
VALUES ('1234567890133','Kunnapat','Hemhem',1,1,2);
INSERT INTO teacher
VALUES ('1234567890143','Ariya','Ariwong',1,1,1);

INSERT INTO section
VALUES ('1',40,'2015/1','2018-02-12 12:12:12','Building 4','1234567890123','2100111');
INSERT INTO section
VALUES ('2',40,'2015/1','2018-02-12 12:12:12','Building 4','1234567890123','2100111');
INSERT INTO section
VALUES ('3',40,'2015/1','2018-02-12 12:12:12','Building 4','1234567890123','2100111');
INSERT INTO section
VALUES ('4',40,'2015/1','2018-02-12 12:12:12','Building 4','1234567890143','2100111');

#INSERT INTO study
#VALUES ('5831069621','2100111','1','2015/1',now(),0);

#select * from study;
#select * from student;