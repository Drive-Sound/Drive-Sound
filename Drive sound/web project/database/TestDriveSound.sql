DROP DATABASE IF EXISTS `testdrivesound`;
CREATE DATABASE IF NOT EXISTS `testdrivesound` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `testdrivesound`;

Create table users_login (
id 			int           	NOT NULL  primary key auto_increment,
name 		varchar(45)		NOT NULL,
email		varchar(255)    NOT NULL,
password 	varchar(255)    NOT NULL
)engine = InnoDB default charset = utf8 ;

insert into users_login value
(1,'Tawan','Tawaneaea11@gmail.com','Tawaneaea11')