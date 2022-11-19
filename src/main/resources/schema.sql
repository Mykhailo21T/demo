DROP table if exists Student;

create table Student(
    id integer AUTO_INCREMENT,
    name varchar(30) not null ,
    email varchar(50) default null,
    age integer not null
);