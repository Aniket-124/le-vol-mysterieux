show databases;
create database tressure;
use tressure;

create table users(
id int not null auto_increment,
email varchar(45) not null,
password varchar(100) not null,
primary key(id)
);

select * from users;