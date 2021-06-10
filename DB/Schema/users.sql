use users;

drop table if exists users;
Create table users
(
    userID int primary key AUTO_INCREMENT,
    firstName varchar(200),
    lastName varchar(200),
    email VARCHAR(200),
    `password` VARCHAR(1000),
    roleID tinyint DEFAULT 1,
    orgID int DEFAULT 1
);



drop table if exists userInformation;
Create table userInformation
(
    userID int,
    roleInOrg varchar(200)

);



drop table if exists userRoles;
Create table userRoles
(
    roleID int primary key AUTO_INCREMENT,
    name varchar(200)
);





